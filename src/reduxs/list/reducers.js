import initialState from "../Store/initialState";
import * as ListActions from "./actions"
import * as VoteActions from "./list_voting/actions"
import * as SearchActions from "./list_search/actions"


export const ListReducer = (state = initialState.roomlist, action) => {
    switch (action.type) {
        case VoteActions.UPDATE:
            return {          
                roomList: state.roomList.map(val => 
                    val.name === action.payload.roomName ? {...val, vote: parseInt(val.vote, 10) + 1}
                    : val)
            }
        case SearchActions.SET:
            return {
                ...state,
                roomList: action.payload.searchList
            }
        case ListActions.SET:
            return {
                ...state,
                roomList: state.roomList.concat(action.payload.roomList)
            }
        case ListActions.RESET:
            return {
                roomList: []
            }
        default:
            return state;
    }
}
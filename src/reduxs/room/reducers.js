import initialState from '../Store/initialState'
import * as RoomCreateActions from './create_room/actions'
import * as RoomLogActions from './room_log/actions'


export const RoomReducer = (state = initialState.room, action) => {
    switch (action.type) {
        case RoomCreateActions.SET:
            return {
                ...state,
                name: action.payload.name,
                title: action.payload.title
            }
        case RoomLogActions.SET_INIT:
            return {
                ...state,
                storys: state.storys.concat(action.payload.storys),
                users: state.users.concat(action.payload.users)
            }
        case RoomLogActions.SET_INFO:
            return {
                ...state,
                name: action.payload.name,
                title: action.payload.title,
                owner: action.payload.owner,
                vote: action.payload.vote
            }
        case RoomLogActions.SET_STORYS:
            return {
                ...state,
                storys: state.storys.concat(action.payload.storys)
            }
        case RoomLogActions.SET_USERS:
            return {
                ...state,
                users: state.users.concat(action.payload.users),
                userMsg: action.payload.users + "さんが入室しました"
            }
        case RoomLogActions.DEL_USERS:
            return {
                ...state,
                users: state.users.filter( val => val !== action.payload.users[0]),
                userMsg: action.payload.users + "さんが退出しました"
            }
        case RoomLogActions.RESET:
            return {
                ...state,
                name: "",
                title: "",
                owner: "",
                storys: [],
                users: [],
                userMsg: ""
            }
        default:
            return {...state};
    }
}
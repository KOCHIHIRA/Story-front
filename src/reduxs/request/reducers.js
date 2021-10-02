import initialState from "../Store/initialState";
import * as Action from "./actions"

export const RequestReducer = (state = initialState.request, action) => {
    switch (action.type) {
        case Action.LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Action.SUCCESS:
            return {
                ...state,
                isSuccess: action.payload.isSuccess,
                isLoading: action.payload.isLoading,
                errMsg: action.payload.msg
            }
        case Action.FAILURE:
            return {
                ...state,
                isSuccess: action.payload.isSuccess,
                isLoading: action.payload.isLoading,
                errMsg: action.payload.msg
            }
        case Action.ERR:
            return {
                ...state,
                isSuccess: action.payload.isSuccess,
                isLoading: action.payload.isLoading,
                errMsg: action.payload.msg
            }
        case Action.RESET:
            return {
                ...state,
                isSuccess: false,
                isLoading: false,
                errMsg: ""
            }
        default:
            return state;
    }
}
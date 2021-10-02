import {LoginStates} from "../Store/initialState";
import * as LoginAction from "./login/actions"
import * as SessionAction from "./session/actions"


export const UserReducer = (state = LoginStates(), action) => {
    switch (action.type) {
        case LoginAction.LOGIN_SUCCESS:
            return{
                ...state,
                isLogedIn: true,
                userName: action.payload.userName
            }
        case LoginAction.LOG_OUT:
            return {
                ...state,
                isLogedIn: false,
                userName: ""
            }
        case SessionAction.SESSION_OUT:
            return {
                ...state,
                isLogedIn: false,
                session: false
            }
        case SessionAction.CHECKED:
            return {
                ...state,
                session: true
            }
        default:
            return {...state};
            
    }
}
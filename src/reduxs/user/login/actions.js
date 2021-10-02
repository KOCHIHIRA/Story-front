//ログイン用
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LoginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LoginSuccess = (userName) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            userName: userName
        }
    }
};

export const LOGIN_ERR = "LOGIN_ERR";
export const LoginError = (userState) => {
    return {
        type: LOGIN_ERR,
        payload: {
            errorMess: userState.errorMess
        }
    }
};

export const LOG_OUT = "LOG_OUT";
export const LogoutAction = () => {
    return {
        type: LOG_OUT
    }
};
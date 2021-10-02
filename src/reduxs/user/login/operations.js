import { LoginSuccess, LogoutAction } from "./actions";
import { LoadingRequest, SuccessRequest, FailureRequest, ErrRequest, RequestReset } from "../../request/operations";

export const Login = (userName, password) => {
    return async (dispatch) => {
        await dispatch(LoadingRequest());
        console.log(userName, password)
        const url = "http://localhost:3001/login";

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    password: password
                })
            }).then(response => {
                    return response.json()
                })
            if(!response.status) {
                //ログイン失敗した場合
                dispatch(FailureRequest({
                    msg: response.error
                }))
            } else {
                //ログイン成功した場合
                localStorage.setItem("user", userName);
                dispatch(RequestReset())
                dispatch(LoginSuccess(userName));
            }
    }
}

export const Logout = () => {
    return async (dispatch) => {
        console.log("ろぐあうとーーー！！")
        const url = "http://localhost:3001/logout";

        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        })
        if(response.status) {
            localStorage.removeItem("user");
            dispatch(LogoutAction());
        }
    }
}
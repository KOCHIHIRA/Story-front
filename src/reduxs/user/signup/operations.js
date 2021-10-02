import { LoadingRequest, SuccessRequest, FailureRequest, ErrRequest } from "../../request/operations";

export const signUp = (userName, password, mail) => {
    return async (dispatch) => {
        dispatch(LoadingRequest());
        const url = "http://localhost:3001/regist";

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    password: password,
                    mail: mail
                })
            }).then(response => {
                    return response.json()
                })
            if(!response.status) {
                dispatch(FailureRequest({
                    msg: response.error
                }))
            } else {
                //ログイン成功を示すアラートを出力
                dispatch(SuccessRequest({
                    msg: response.error
                }))
            }
    }
}
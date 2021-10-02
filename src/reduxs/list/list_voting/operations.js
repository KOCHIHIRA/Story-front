import { sessionOut } from "../../user/session/operations";
import { LoadingRequest, SuccessRequest, FailureRequest, ErrRequest, RequestReset } from "../../request/operations";
import { UpdateList } from "./actions";

export const toVote = (roomName) => {
    return async (dispatch) => {
        dispatch(LoadingRequest())
        const url = "http://localhost:3001/voting";

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: roomName
                })
            }).then(response => {
                    return response.json()
                })
            if(!response.status) {
                if(response.error === "session_out") {
                    //確認ダイアログを表示させる
                    dispatch(sessionOut())
                }
                dispatch(FailureRequest({
                    msg: response.error
                }))
            } else {
                dispatch(SuccessRequest({
                    msg: response.error
                }))
                dispatch(UpdateList({
                    roomName: roomName
                }));
            }
    }
}
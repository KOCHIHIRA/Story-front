import { push } from "connected-react-router";
import { FailureRequest, LoadingRequest, SuccessRequest } from "../../request/operations";
import { sessionOut } from "../../user/session/operations";

export const enterRoom = (roomInfo) => {
    return async (dispatch) => {
        //dispatch(LoadingRequest())
        console.log(roomInfo)
        const url = "http://localhost:3001/roomjoin";
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: roomInfo.name,
                    title: roomInfo.title,
                    owner: roomInfo.owner,
                    vote: roomInfo.vote
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
                   mag: response.error
               }))
             　dispatch(push("/room/" + roomInfo.name));
            }
    }
}
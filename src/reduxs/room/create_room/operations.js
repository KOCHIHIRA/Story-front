import { ErrRequest, LoadingRequest, SuccessRequest, FailureRequest } from "../../request/operations";
import { sessionOut } from "../../user/session/operations";

import { SetRoomInfoAction, RoomInfoResetAction } from './actions'

export const RoomCreate = (roomName, storyTitle) => {
    return async (dispatch) => {
        dispatch(LoadingRequest());

        const url = "http://localhost:3001/create_room";

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: roomName,
                    title: storyTitle,
                    owner: localStorage.getItem("user")
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
                    errMsg: response.error
                }))
            }
    }
}

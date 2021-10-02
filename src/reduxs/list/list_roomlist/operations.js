import { sessionOut } from "../../user/session/operations";
import { LoadingRequest, SuccessRequest, FailureRequest, ErrRequest, RequestReset } from "../../request/operations";
import {SetRoomList, ResetList} from "./../actions"


export const getRoomList = (roomNum) => {
    return async (dispatch) => {
        dispatch(LoadingRequest());

        const url = "http://localhost:3001/roomlist";

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    offset: roomNum
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
               dispatch(RequestReset())
                dispatch(SetRoomList({
                    roomList: response.data
                }));
            }
    }
}

export const roomlistReset = () => {
    return (dispatch) => {
        dispatch(RequestReset())
        dispatch(ResetList());
    }
}
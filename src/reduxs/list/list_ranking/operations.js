import { sessionOut } from "../../user/session/operations";
import { LoadingRequest, SuccessRequest, FailureRequest, ErrRequest, RequestReset } from "../../request/operations";
import {SetRoomList, ResetList} from "./../actions"

export const getRanking = () => {
    return async (dispatch) => {
        dispatch(LoadingRequest());
        const url = "http://localhost:3001/ranking";
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
            if(!response.status) {
                
                if(response.error === "session_out") {
                    //確認ダイアログを表示させる
                    dispatch(sessionOut())
                }
                dispatch(FailureRequest(response.error))
            } else {
                dispatch(SuccessRequest(response.error))
                dispatch(SetRoomList({
                    roomList: response.data
                }))
            }
    }
}

export const resetRanking = () => {
    return (dispatch) => {
        dispatch(ResetList())
    }
}
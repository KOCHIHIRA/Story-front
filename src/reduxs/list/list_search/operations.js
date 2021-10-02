import { sessionOut } from "../../user/session/operations";
import { LoadingRequest, SuccessRequest, FailureRequest, ErrRequest, RequestReset } from "../../request/operations";
import { SetSearchList } from "./actions";
import { ResetList} from "./../actions"


export const getRoomList = (roomName) => {
    return async (dispatch) => {
        dispatch(LoadingRequest());

        const url = "http://localhost:3001/search";

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
                dispatch(RequestReset({
                    msg: response.error
                }))

                dispatch(SetSearchList({
                    searchList: response.data
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
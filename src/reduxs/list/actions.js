export const SET = "SET_LIST"
export const SetRoomList = (roomState) => {
    return {
        type: SET,
        payload: {
            roomList: roomState.roomList
        }
    }
}

export const RESET = "LIST_RESET"
export const ResetList = () => {
    return {
        type: RESET
    }
}
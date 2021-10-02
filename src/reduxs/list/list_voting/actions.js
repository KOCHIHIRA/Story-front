export const UPDATE = "VOTE_UPDATE"
export const UpdateList = (roomState) => {
    return {
        type: UPDATE,
        payload: {
            roomName: roomState.roomName
        }
    }
}
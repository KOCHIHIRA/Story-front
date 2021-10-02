
export const SET = "SET_ROOMINFO"
export const SetRoomInfoAction = (roomState) => {
    return {
        type: SET,
        payload: {
            name: roomState.name,
            title: roomState.title
        }
    }
}


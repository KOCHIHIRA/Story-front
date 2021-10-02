export const SET = "SET_SEARCH"
export const SetSearchList = (roomState) => {
    return {
        type: SET,
        payload: {
            searchList: roomState.searchList
        }
    }
}
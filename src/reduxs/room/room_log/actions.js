
export const SET_INIT = "SET_INIT_ROOMLOG"
export const InitRoomLogsAction = (roomState) => {
    return {
        type: SET_INIT,
        payload: {
            storys: roomState.storys,
            users: roomState.users
        }
    }
}

export const SET_STORYS = "SET_STORYS"
export const SetStorysAction = (roomState) => {
    return {
        type: SET_STORYS,
        payload: {
            storys: roomState.storys
        }
    }
}

export const SET_USERS = "SET_USERS"
export const SetUsersAction = (roomState) => {
    return {
        type: SET_USERS,
        payload: {
            users: roomState.users
        }
    }
}

export const DEL_USERS = "DEL_USERS"
export const DelUsersAction = (roomState) => {
    console.log(roomState)
    return {
        type: DEL_USERS,
        payload: {
            users: roomState.users
        }
    }
}

export const SET_INFO = "SET_INFO"
export const SetRoomInfo = (roomState) => {
    return {
        type: SET_INFO,
        payload: {
            name: roomState.name,
            title: roomState.title,
            owner: roomState.owner,
            vote: roomState.vote
        }
    }
}

export const RESET = "ROOMLOG_RESET"
export const ResetAction = () => {
    return {
        type: RESET
    }
}

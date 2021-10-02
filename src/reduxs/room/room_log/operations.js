import { InitRoomLogsAction, SetStorysAction, SetUsersAction, DelUsersAction, SetRoomInfo, ResetAction } from './actions'

export const setInitRoomLogs = (storys, users) => {
    return (dispatch) => {
        dispatch(InitRoomLogsAction({storys, users}));
    }
}

export const addStorys = (storys) => {
    return (dispatch) => {
        dispatch(SetStorysAction({storys}))
    }
}

export const joinUsers = (users) => {
    return (dispatch) => {
        dispatch(SetUsersAction({users}))
    }
}

export const outUsers = (users) => {
    return (dispatch) => {
        dispatch(DelUsersAction({users}))
    }
}

export const setRoomInfo = (name, title, owner, vote) => {
    return (dispatch) => {
        dispatch(SetRoomInfo({name, title, owner, vote}))
    }
}

export const roomOut = () => {
    return (dispatch) => {
        dispatch(ResetAction())
    }
}

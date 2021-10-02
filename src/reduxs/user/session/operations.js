import { SessionOutAction, SessionOutChecked } from './actions'

export const sessionOut = () => {
    return async (dispatch) => {
        dispatch(SessionOutAction())
    }
}

export const sessionOutChecked = () => {
    return async (dispatch) => {
        dispatch(SessionOutChecked())
    }
}
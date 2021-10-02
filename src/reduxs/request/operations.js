import {LoadingAction, SuccessAction, FailureAction, ErrAction, ResetAction, SessionOutAction} from './actions'

export const LoadingRequest = () => {
    return async (dispatch) => {
        dispatch(LoadingAction())
    }
}

export const SuccessRequest = (msg) => {
    return async (dispatch) => {
        dispatch(SuccessAction(msg))
    }
}

export const FailureRequest = (msg) => {
    return async (dispatch) => {
        dispatch(FailureAction(msg))
    }
}

export const ErrRequest = (msg) => {
    return async (dispatch) => {
        dispatch(ErrAction(msg))
    }
}

export const RequestReset = () => {
    return async (dispatch) => {
        dispatch(ResetAction())
    }
}
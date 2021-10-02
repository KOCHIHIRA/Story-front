
export const LOADING = "LOADING"
export const LoadingAction = () => {
    return {
        type: LOADING,
        payload: {
            isLoading: true,
        }
    }
}

export const SUCCESS = "SUCCESS"
export const SuccessAction = (requestState) => {
    return {
        type: SUCCESS,
        payload: {
            isSuccess: true,
            isLoading: false,
            msg: requestState.msg,
        }
    }
}

export const FAILURE = "FAILURE"
export const FailureAction = (requestState) => {
    return {
        type: FAILURE,
        payload: {
            isSuccess: false,
            isLoading: false,
            msg: requestState.msg,
        }
    }
}

export const ERR = "ERR"
export const ErrAction = (requestState) => {
    return {
        type: ERR,
        payload: {
            isSuccess: false,
            isLoading: false,
            msg: requestState.msg,
        }
    }
}

export const RESET = "REQUEST_RESET"
export const ResetAction = () => {
    return {
        type: RESET
    }
}
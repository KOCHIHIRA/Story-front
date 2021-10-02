import { createSelector } from "reselect";

const requestsSelector = (state) => state.request;

export const getSuccess = createSelector(
    [requestsSelector],
    state => state.isSuccess
);

export const getLoading = createSelector(
    [requestsSelector],
    state => state.isLoading
);

export const getMsg = createSelector(
    [requestsSelector],
    state => state.errMsg
);

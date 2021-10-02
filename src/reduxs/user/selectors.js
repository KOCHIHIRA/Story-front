import { createSelector } from "reselect";

const usersSelector = (state) => state.user;

export const getLogedIn = createSelector(
    [usersSelector],
    state => state.isLogedIn
);

export const getUserName = createSelector(
    [usersSelector],
    state => state.userName
);

export const getSession = createSelector(
    [usersSelector],
    state => state.session
)
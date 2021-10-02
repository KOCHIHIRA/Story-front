import { createSelector } from "reselect";

const requestsSelector = (state) => state.list;

export const RoomListState = createSelector(
    [requestsSelector],
    state => state.roomList
);
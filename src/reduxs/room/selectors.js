import { createSelector } from "reselect";

const roomsSelector = (state) => state.room;


export const RoomListState = createSelector(
    [roomsSelector],
    state => state.roomList
);

export const RoomNameState = createSelector(
    [roomsSelector],
    state => state.name
)

export const  RoomTitleState = createSelector(
    [roomsSelector],
    state => state.title
)

export const RoomOwnerState = createSelector(
    [roomsSelector],
    state => state.owner
)

export const RoomVoteState = createSelector(
    [roomsSelector],
    state => state.vote
)

export const StorysState = createSelector(
    [roomsSelector],
    state => state.storys
)

export const UsersState = createSelector(
    [roomsSelector],
    state => state.users
)

export const UserMsgState = createSelector(
    [roomsSelector],
    state => state.userMsg
)

export const RoomRanking = createSelector(
    [roomsSelector],
    state => state.ranking
)
import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
} from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import { RequestReducer } from "../request/reducers"
import { UserReducer } from "../user/reducers"
import { RoomReducer } from './../room/reducers'
import { ListReducer } from "../list/reducers"


export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            request: RequestReducer,
            user: UserReducer,
            room: RoomReducer,
            list: ListReducer

        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}

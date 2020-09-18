import {
  //別名インポート
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";

//import react-router
import { connectRouter, routerMiddleware } from "connected-react-router";

//import reducers
import { TodoReducer, completeTodoReducer } from "../todos/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      todos: TodoReducer,
      completeTodos: completeTodoReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  );
}

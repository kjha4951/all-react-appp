import { createStore } from "redux";
import { Reducers } from "./reducers/index.js";

const store=createStore(Reducers,{} ,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

export default store;

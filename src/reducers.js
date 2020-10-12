import { combineReducers } from "redux";

import { reducers as home } from "./pages/home/duck";

export default combineReducers( {
    home,
} );

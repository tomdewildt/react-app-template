import { all } from "redux-saga/effects";

import { sagas as home } from "./pages/home/duck";

export default function* root() {
    yield all( [
        home(),
    ] );
}

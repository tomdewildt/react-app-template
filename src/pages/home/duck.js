import { combineReducers } from "redux";

// Types

// Actions
export const actions = {};

// Selectors
export const selectors = {};

// Reducers
const defaultState = { home: null };

const home = ( state = defaultState.home ) => state;

export const reducers = combineReducers( { home } );

// Sagas
export const sagas = function* main() {
    yield;
};

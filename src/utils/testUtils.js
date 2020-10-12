/* eslint-disable import/no-extraneous-dependencies, react/prop-types */
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { expectSaga } from "redux-saga-test-plan";
import createStore from "redux-mock-store";

import defaultTheme from "../theme";

const defaultStore = createStore( [] );
const defaultState = { map: {} };

export const renderWithRouter = (
    component,
    entries = [ "/" ],
    state = defaultState,
    theme = defaultTheme,
) => {
    const store = defaultStore( state );
    return {
        store,
        ...render( component, {
            wrapper: ( { children } ) => (
                <ThemeProvider theme={ theme }>
                    <Provider store={ store }>
                        <MemoryRouter initialEntries={ entries }>
                            { children }
                        </MemoryRouter>
                    </Provider>
                </ThemeProvider>
            ),
        } ),
    };
};

export const renderWithProvider = (
    component,
    state = defaultState,
    theme = defaultTheme,
) => {
    const store = defaultStore( state );
    return {
        store,
        ...render( component, {
            wrapper: ( { children } ) => (
                <ThemeProvider theme={ theme }>
                    <Provider store={ store }>
                        { children }
                    </Provider>
                </ThemeProvider>
            ),
        } ),
    };
};

export const renderWithTheme = (
    component,
    theme = defaultTheme,
) => render( component, {
    wrapper: ( { children } ) => (
        <ThemeProvider theme={ theme }>
            { children }
        </ThemeProvider>
    ),
} );

export const runReducer = ( reducer, action, state ) => reducer( state, action );

export const runSaga = ( saga, ...args ) => expectSaga( saga, ...args );

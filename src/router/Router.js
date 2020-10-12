import React from "react";
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import PropTypes from "prop-types";

import { PageHome } from "../pages";

const Router = ( { children } ) => (
    <BrowserRouter>
        { children }
        <Switch>
            <Route exact path="/" component={ PageHome } />
            <Route exact path="*" component={ () => <Redirect to="/" /> } />
        </Switch>
    </BrowserRouter>
);

Router.propTypes = {
    children: PropTypes.node,
};

Router.defaultProps = {
    children: null,
};

export default Router;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

import { PageHome } from "../pages";

const Router = ( { children } ) => (
    <>
        { children }
        <Routes>
            <Route exact path="/" element={ <PageHome /> } />
            <Route exact path="*" element={ <Navigate to="/" replace /> } />
        </Routes>
    </>
);

Router.propTypes = {
    children: PropTypes.node,
};

Router.defaultProps = {
    children: null,
};

export default Router;

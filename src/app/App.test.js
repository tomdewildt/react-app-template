import React from "react";
import { axe } from "jest-axe";

import { renderWithProvider } from "../utils/testUtils";

import App from "./App";

describe( "Router", () => {
    it( "renders consistently", () => {
        const { asFragment } = renderWithProvider( <App /> );
        const fragment = asFragment();

        expect( fragment ).toMatchSnapshot();
    } );

    it( "should have no axe violations", async () => {
        const { container } = renderWithProvider( <App /> );
        const result = await axe( container );

        expect( result ).toHaveNoViolations();
    } );
} );

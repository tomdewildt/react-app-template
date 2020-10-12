import React from "react";
import { axe } from "jest-axe";

import { renderWithTheme } from "../../utils/testUtils";

import PageHome from "./Home";

describe( "Home", () => {
    it( "renders consistently", () => {
        const { asFragment } = renderWithTheme( <PageHome /> );
        const fragment = asFragment();

        expect( fragment ).toMatchSnapshot();
    } );

    it( "should have no axe violations", async () => {
        const { container } = renderWithTheme( <PageHome /> );
        const result = await axe( container );

        expect( result ).toHaveNoViolations();
    } );
} );

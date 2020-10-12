import React from "react";
import { axe } from "jest-axe";

import { renderWithTheme } from "../../utils/testUtils";

import Page from "./Page";

describe( "Page", () => {
    it( "renders consistently", () => {
        const { asFragment } = renderWithTheme( <Page /> );
        const fragment = asFragment();

        expect( fragment ).toMatchSnapshot();
    } );

    it( "should have no axe violations", async () => {
        const { container } = renderWithTheme( <Page /> );
        const result = await axe( container );

        expect( result ).toHaveNoViolations();
    } );
} );

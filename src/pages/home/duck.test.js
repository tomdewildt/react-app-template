import { runReducer } from "../../utils/testUtils";

import { reducers } from "./duck";

describe( "actions", () => {} );

describe( "selectors", () => {} );

describe( "reducers", () => {
    it( "dispatches the correct state", () => {
        const state = runReducer( reducers );

        expect( state.home ).toBeNull();
    } );
} );

describe( "sagas", () => {} );

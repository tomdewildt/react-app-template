import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode />,
    document.getElementById( "root" ),
);

serviceWorker.unregister();

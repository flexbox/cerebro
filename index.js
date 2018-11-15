require("dotenv").config({ path: __dirname + "/.env" });

import React from "react";
import { render } from "react-dom";

import Root from "./container/Root";

render(<Root />, document.querySelector("#root"));

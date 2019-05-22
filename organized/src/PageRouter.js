import React from "react";
import {Route} from "react-router-dom";
import App from "./App";
import Map from "./Map";

const PageRouter = () => (
	<div>
		<Route path = "/" exact component = {App} />
		<Route path = "/map" exact component = {Map} />

	</div>
);
export default PageRouter;
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Landing} exact path="/" />
				<Route component={OrphanagesMap} path="/app" />
				<Route component={CreateOrphanage} path="/orphanages/create" />
				<Route component={Orphanage} path="/orphanages/:id" />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;

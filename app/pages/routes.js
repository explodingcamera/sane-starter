import React from 'react';
import {Route, Switch} from 'react-router/es';
import asyncComponent from 'util/asyncComponent';

import App from 'components/app';

const routes = (
	<Switch>
		<Route path="/">
			<App>
				<Route exact path="/" component={asyncComponent(import('pages/home'))}/>
				{/* <Route exact path="/somepath" component={asyncComponent(import('pages/somePage'))}/> */}
			</App>
		</Route>
	</Switch>
);

export default routes;

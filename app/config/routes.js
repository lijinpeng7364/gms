import React from 'react'
import Main from '../components/layouts/Main'
import Blank from '../components/layouts/Blank'

import MainView from '../views/Main'
import MinorView from '../views/Minor'
import NoMatchView from '../views/NoMatch'

import { Route, Switch, Redirect } from 'react-router'

const Main_ = (props) => (
	<Main location={props.location}>
		<Switch>
	        <Redirect exact to="/main" from="/" />
	        <Route path="/main" component={MainView}></Route>
	        <Route path="/minor" component={MinorView}></Route>
	        <Route component={NoMatchView}></Route>
		</Switch>
	</Main>
)

export default (
    <Route path="/" component={Main_}></Route>
)
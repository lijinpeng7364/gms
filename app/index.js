import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import routes from './config/routes'

import jquery from 'jquery'
import metismenu from 'metismenu'
import bootstrap from 'bootstrap'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../styles/style.css'

ReactDOM.render(
	<BrowserRouter>
		{routes}
	</BrowserRouter>,
    document.getElementById('root')
)
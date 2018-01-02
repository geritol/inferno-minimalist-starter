import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './normalize.css'
import './index.css'

import App from './pages/App'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import ResetPassword from './pages/user/ResetPassword'

//hdf

const browserHistory = createBrowserHistory();

const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <IndexRoute component={ Home }/>
       <Route path="/about" component={ About }/>
       <Route path="/login" component={ Login }/>
       <Route path="/register" component={ Register }/>
       <Route path="/reset" component={ ResetPassword }/>
    </Route>
  </Router>
);

Inferno.render( routes, document.getElementById('app'));

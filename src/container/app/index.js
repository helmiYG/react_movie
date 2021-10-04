import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import * as Routes from 'config/routes'
import { Home, Detail} from 'container/pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact
          component={Home}
          path={Routes.Home}
        />
        <Route 
          exact
          component={Detail}
          path={Routes.Detail}
        />
       
      </Switch>
    </Router>
  );
}

export default App;

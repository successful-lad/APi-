import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import { routes } from 'consts';
import * as screens from 'screens';
import { store, history } from './configureStore';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path={routes.getMainScreen()} component={screens.MainScreen} />
        <Route path={routes.getDefaultScreen()} component={screens.HomeScreen} />
        <Route path={routes.getBase()} component={screens.FetchScreen} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

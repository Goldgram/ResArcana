/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

// import { HomePage } from './containers/HomePage/Loadable';
import { POC } from './poc/index';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Res Arcana" defaultTitle="Res Arcana">
        <meta name="description" content="Test Version of Res Arcana" />
      </Helmet>

      <Switch>
        {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} /> */}
        <Route exact path={process.env.PUBLIC_URL + '/'} component={POC} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

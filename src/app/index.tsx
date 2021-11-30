/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import NavigationBar from './components/navigation-bar';
import AllRoutes from './routes';

export function App() {
  return (
    <Router>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <NavigationBar />
      <AllRoutes />
      <GlobalStyle />
    </Router>
  );
}

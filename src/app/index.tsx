/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

export function App() {
  return (
    <Router>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route element={<h2>hello</h2>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

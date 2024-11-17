// src/routes.jsx
import React from 'react';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: "/",
    element: <Home />, // Renders the Home page
  },
  {
    path: "/directors",
    element: <Directors />, // Renders the Directors page
  },
  {
    path: "/actors",
    element: <Actors />, // Renders the Actors page
  },
  {
    path: "/movie/:id", // Dynamic route for Movie with 'id' as a parameter
    element: <Movie />, // Renders the Movie page
  },
  {
    path: "*", // This will catch any undefined routes and render the ErrorPage
    element: <ErrorPage />, // Renders the ErrorPage for any unknown route
  },
];

export default routes;

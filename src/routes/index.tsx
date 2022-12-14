import { FC, lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { Routes } from 'constants/routes';

const MainLayout = lazy(() => import(/* webpackChunkName: "main'" */ 'layouts/MainLayout'));

const NotFoundPage = lazy(() => import(/* webpackChunkName: "404" */ 'pages/NotFoundPage'));
const MainPage = lazy(() => import(/* webpackChunkName: "main'" */ 'pages/MainPage'));

const routes: RouteObject[] = [
  {
    path: Routes.main,
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: Routes.main,
        element: <MainPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const RenderRoute: FC = () => useRoutes(routes);

import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import { Login } from '@/pages/login/login';
import TodoBoardDashboard from '@/pages/todoBoardDashboard';

const Home = React.lazy(() => import('@/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/todo-board',
    element: <TodoBoardDashboard />,
  },
];

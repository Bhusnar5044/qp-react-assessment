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
  {
    path: '/todo-board',
    element: <TodoBoardDashboard />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];

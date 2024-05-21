import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import TodoBoardDashboard from '@/pages/todoBoardDashboard';

const Home = React.lazy(() => import('@/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todo-board',
    element: <TodoBoardDashboard />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];

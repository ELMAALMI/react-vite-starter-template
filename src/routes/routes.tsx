import { Error404, LoginPage } from '@/pages';
import type { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '*',
        element: <Error404 />
    }
];

export const Route = () => useRoutes(routes);

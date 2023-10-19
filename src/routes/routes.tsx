import { LoginPage } from '@/pages';
import type { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <LoginPage />
    }
];

export const Route = () => useRoutes(routes);

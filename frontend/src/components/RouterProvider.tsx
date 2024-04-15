import { ElementType, JSX } from 'react';
import { HomePage } from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';

export type RouteType = {
    path: string,
    component: ElementType;
    default?: boolean;
    children?: Array<RouteType>;
    icon?: string;
};

export const header: Array<RouteType> = [
    {
        path: '/',
        component: HomePage,
    }
];

export const RouterProvider = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
};
import { ElementType, JSX } from 'react';
import { HomePage } from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { NewEventPage } from '../pages/NewEventPage';

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
        component: HomePage
    },
    {
        path: '/newevent',
        component: NewEventPage
    }
];

export const RouterProvider = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/newevent' element={<NewEventPage />} />
        </Routes>
    );
};
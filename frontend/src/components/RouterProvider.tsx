import { ElementType, JSX } from 'react';
import { HomePage } from '../pages/Home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { NewEventPage } from '../pages/Event/NewEventPage';
import { EventDetailsPage } from '../pages/Event/EventDetailsPage';
import { ParticipantDetailsPage } from '../pages/Event/ParticipantDetailsPage';

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
            <Route path="/event/:id" element={<EventDetailsPage />} />
            <Route path="/participant/:id" element={<ParticipantDetailsPage />} />
        </Routes>
    );
};
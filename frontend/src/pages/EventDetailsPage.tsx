import React from 'react';
import { useTranslation } from 'react-i18next';

type EventDetailsPageProps = {};

export const EventDetailsPage: React.FC<EventDetailsPageProps> = (props: EventDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <>Event details</>
    )
}
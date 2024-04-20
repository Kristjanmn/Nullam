import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPastEvents, getUpcomingEvents } from '../../features/event/eventActions';
import { Event } from '../../features/event/eventSlice';
import { EventsComponentTemplate } from './EventsComponent';

type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const upcomingEvents: Event[] = useAppSelector((state) => state.event.upcomingEvents);
    const pastEvents: Event[] = useAppSelector((state) => state.event.pastEvents);

    const updateEventsPanel = () => {
        dispatch(getUpcomingEvents());
        dispatch(getPastEvents());
    }

    useEffect(() => {
        updateEventsPanel();
    }, []);

    const infoPanel = () => {
        return (
            <>
                <Splitter className="info-panel">
                    <SplitterPanel className="flex alight-items-center justify-content-center">
                        <div className="info-panel-left">
                            <div className="info-panel-text">
                                {t('home.info-text')}
                            </div>
                        </div>
                    </SplitterPanel>
                    <SplitterPanel className="flex alight-items-center justify-content-center">
                        <img className="info-panel-image" src={`//${window?.top?.location.host}/pilt.jpg`} alt="image" />
                    </SplitterPanel>
                </Splitter>
            </>
        );
    };

    const eventsPanel_upcoming = () => {
        return (
            <>
                <EventsComponentTemplate title={t('home.upcoming-events')} events={upcomingEvents} />
            </>
        );
    };

    const eventsPanel_past = () => {
        return (
            <EventsComponentTemplate title={t('home.past-events')} events={pastEvents} />
        );
    };

    const events = () => {
        return (
            <>
                <Splitter className="events-panel">
                    <SplitterPanel>
                        {eventsPanel_upcoming()}
                    </SplitterPanel>
                    <SplitterPanel>
                        {eventsPanel_past()}
                    </SplitterPanel>
                </Splitter>
            </>
        );
    };

    return (
        <>
            {infoPanel()}
            {events()}
        </>
    );
};
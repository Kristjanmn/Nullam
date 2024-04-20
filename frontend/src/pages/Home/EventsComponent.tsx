import { Event } from '../../features/event/eventSlice';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';

type EventsComponentProps = {
    title: string;
    events: Event[];
    removeEventBtn?: boolean;
    newEventBtn?: boolean;
    newEventBtnAction?: () => void;
}

const EventTemplate = (event: Event) => {
    const { t } = useTranslation();

    return (
        <>
            <div>
                {event.name}
                {event.dateTime.getDate()}
                <Button label={t('home.event-participants')} />
            </div>
        </>
    );
};

const EventsComponentTemplate = (props: EventsComponentProps) => {
    const { t } = useTranslation();

    const getEvents = () => {
        return props.events.map((event) => (
            <EventTemplate id={event.id} name={event.name} dateTime={event.dateTime} location={event.location} additionalInfo={event.additionalInfo} participants={event.participants} />
        ));
    }

    const eventsMap = getEvents();

    return (
        <>
            <div className="home-events">
                <div className="home-events-header">{props.title}</div>
                <div>
                    {props.events ? <>
                        {eventsMap}
                    </> : <>
                        {t('home.noevents')}
                    </>}
                </div>
            </div>
        </>
    );
};

export { EventsComponentTemplate }
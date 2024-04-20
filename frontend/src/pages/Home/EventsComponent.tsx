import { Event } from '../../features/event/eventSlice';
import { useTranslation } from 'react-i18next';
import EventsTable from './EventsTable';

type EventsComponentProps = {
    title: string;
    events: Event[];
    removeEventBtn?: boolean;
    newEventBtn?: boolean;
    newEventBtnAction?: () => void;
};

const EventsComponentTemplate = (props: EventsComponentProps) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="home-events">
                <div className="home-events-header">{props.title}</div>
                <div className="home-events-content">
                    {props.events ? <>
                        <EventsTable events={props.events} canRemove={props.removeEventBtn} />
                    </> : <>
                        {t('home.noevents')}
                    </>}
                    {props.newEventBtn ? <>
                        <a className="home-events-new-event-btn" onClick={props.newEventBtnAction}>{t('home.new-event')}</a>
                    </> : <></>}
                </div>
            </div>
        </>
    );
};

export { EventsComponentTemplate };
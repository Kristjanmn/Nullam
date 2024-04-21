import { Event, setEventToDelete } from '../../features/event/eventSlice';
import { dateToString } from '../../utils/date-utils';
import { deleteEvent } from '../../features/event/eventActions';

export const getColumns = (t: any, navigate: any, dispatch: any, canDelete: boolean) => {
    return [
        {
            field: 'name',
            header: t('event.name')
        },
        {
            field: 'date',
            header: t('event.date'),
            body: (event: Event) => dateTemplate(event.dateTime)
        },
        {
            field: 'location',
            header: t('event.location')
        },
        {
            field: 'participants',
            header: t('event.participants'),
            body: (event: Event) => participantsTemplate(t('event.participants'), () => {navigate(`/event/${event.id}`)}, canDelete, () => {dispatch(setEventToDelete(event)); dispatch(deleteEvent());})
        }
    ];
};

const dateTemplate = (date: Date) => {
    return (dateToString(new Date(date.toString())));
}

const participantsTemplate = (label: string, participantsFunc: () => void, canRemove: boolean, removeFunc: () => void) => {
    return (
        <div className="home-events-item">
            <b className="home-events-item-participants" onClick={participantsFunc}>{label}</b>
            {canRemove ? <>
                <img className="home-events-item-remove" onClick={removeFunc} src={`//${window?.top?.location.host}/remove.svg`} alt="remove"/>
            </> : <></>}
        </div>
    );
}
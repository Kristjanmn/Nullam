import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import PageHeadComponent from '../components/PageHeadComponent';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Event, setEventToSave } from '../features/event/eventSlice';
import { isAnyStringBlank } from '../utils/string-utils';
import { isDateInFuture } from '../utils/date-utils';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { saveEvent } from '../features/event/eventActions';

type NewEventPageProps = {};

export const NewEventPage: React.FC<NewEventPageProps> = (props: NewEventPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [event, setEvent] = useState<Event>({id: null, name: '', dateTime: new Date(), location: '', additionalInfo: '', participants: []});

    const save = async () => {
        if (isAnyStringBlank([event.name, event.location]) ||
            !isDateInFuture(event.dateTime))
            window.alert('Some required fields are empty!');
        dispatch(setEventToSave(event));
        dispatch(saveEvent);
        console.log(event)
    }
    const onDateTimeChanged = (date: Date | undefined | null) => {
        if (date)
            setEvent({...event, dateTime: date})
    }

    const newEventForm = () => {
        return (
            <div className="new-event-container">
                <div className="page-title">{t('event.new-event-title')}</div>
                <div className="new-event-form">
                    <div className="label-field">
                        <label className="lf-l" htmlFor="name">{t('event.name')}:</label>
                        <InputText className="lf-r" id="name" value={event.name} onChange={(e) => setEvent({...event, name: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="lf-l" htmlFor="dateTime">{t('event.date')}:</label>
                        <Calendar className="lf-r" id="dateTime" value={event.dateTime} showTime hourFormat="24" onChange={(e) => onDateTimeChanged(e.target.value)} />
                    </div>
                    <div className="label-field">
                        <label className="lf-l" htmlFor="location">{t('event.location')}:</label>
                        <InputText className="lf-r" id="location" value={event.location} onChange={(e) => setEvent({...event, location: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="lf-l" htmlFor="additionalInfo">{t('event.additional-info')}:</label>
                        <InputTextarea className="lf-r" id="additionalInfo" value={event.additionalInfo} onChange={(e) => setEvent({...event, additionalInfo: e.target.value})} autoResize />
                    </div>
                </div>
                <div className="new-event-buttons">
                    <Button className="new-event-buttons-back" onClick={() => navigate('/')} label={t('event.new-event-back-btn')} />
                    <Button className="new-event-buttons-add" onClick={save} label={t('event.new-event-add-btn')} />
                </div>
            </div>
        );
    };

    return (
        <div className="new-event-page">
            <PageHeadComponent text={t('event.new-event-title')} />
            {newEventForm()}
        </div>
    );
};
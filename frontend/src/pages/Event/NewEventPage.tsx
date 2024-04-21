import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import PageHeadComponent from '../../components/PageHeadComponent';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Event, setEventToSave } from '../../features/event/eventSlice';
import { isAnyStringBlank } from '../../utils/string-utils';
import { isDateInFuture } from '../../utils/date-utils';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { saveEvent } from '../../features/event/eventActions';
import { unwrapResult } from '@reduxjs/toolkit';

type NewEventPageProps = {};

export const NewEventPage: React.FC<NewEventPageProps> = (props: NewEventPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [event, setEvent] = useState<Event>({id: null, name: '', dateTime: new Date(), location: '', additionalInfo: '', participants: []});

    const save = async () => {
        if (isAnyStringBlank([event.name, event.location]) ||
            !isDateInFuture(event.dateTime)) {
            window.alert('Some required fields are empty!');
            return;
        }
        dispatch(setEventToSave(event));
        await dispatch(saveEvent())
            .then(unwrapResult)
            .then(result => {
                navigate(`/event/${result}`);
            })
            .catch(error => window.alert(error));
    };
    const onDateTimeChanged = (date: Date | undefined | null) => {
        if (date)
            setEvent({...event, dateTime: date});
    };

    const newEventForm = () => {
        return (
            <div>
                <div className="new-event-form">
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="name">{t('event.name')}:</label>
                        <InputText className="label-field-right" id="name" value={event.name} onChange={(e) => setEvent({...event, name: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="dateTime">{t('event.date-time')}:</label>
                        <Calendar className="label-field-right" id="dateTime" value={event.dateTime} showTime hourFormat="24" onChange={(e) => onDateTimeChanged(e.target.value)} minDate={new Date()} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="location">{t('event.location')}:</label>
                        <InputText className="label-field-right" id="location" value={event.location} onChange={(e) => setEvent({...event, location: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="additionalInfo">{t('event.additional-info')}:</label>
                        <InputTextarea className="label-field-right" id="additionalInfo" value={event.additionalInfo} onChange={(e) => setEvent({...event, additionalInfo: e.target.value})} autoResize />
                    </div>
                </div>
                <div className="new-event-buttons">
                    <Button className="new-event-buttons-back" onClick={() => window.history.back()} label={t('event.new-event-back-btn')} />
                    <Button className="new-event-buttons-add" onClick={save} label={t('event.new-event-add-btn')} />
                </div>
            </div>
        );
    };

    return (
        <div className="page">
            <PageHeadComponent text={t('event.new-event-title')} />
            <div className="page-container">
                <div className="page-title">{t('event.new-event-title')}</div>
                {newEventForm()}
            </div>
        </div>
    );
};
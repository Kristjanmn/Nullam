import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PageHeadComponent from '../../components/PageHeadComponent';
import { getEvent, saveEvent } from '../../features/event/eventActions';
import { dateToString_precise } from '../../utils/date-utils';
import { Organization, Participant, Person } from '../../features/participant/participantSlice';
import { setEventToGet, setEventToSave } from '../../features/event/eventSlice';
import ParticipantsTable from './ParticipantsTable';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { ParticipantType } from '../../enums/participantType';
import { RadioButton } from 'primereact/radiobutton';
import { PaymentMethod } from '../../enums/paymentMethod';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { isAnyStringBlank } from '../../utils/string-utils';
import { cloneDeep } from 'lodash';

type EventDetailsPageProps = {};

export const EventDetailsPage: React.FC<EventDetailsPageProps> = (props: EventDetailsPageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const params = useParams();
    const event = useAppSelector((state) => state.event.selectedEvent);
    const [participantType, setParticipantType] = useState<ParticipantType>(ParticipantType.PERSON);
    const [newParticipant_person, setNewParticipant_person] = useState<Person>({id: null, firstName: '', lastName: '', personalCode: 0, paymentMethod: PaymentMethod.DEFAULT, additionalInfo: ''});
    const [newParticipant_organization, setNewParticipant_organization] = useState<Organization>({id: null, name: '', registrationCode: 0, participants: 1, paymentMethod: PaymentMethod.BANK_TRANSACTION, additionalInfo: ''});
    const paymentMethodOptions = [
        { name: `${t('generic.payment-method.bank-transaction')}`, value: PaymentMethod.BANK_TRANSACTION},
        { name: `${t('generic.payment-method.cash')}`, value: PaymentMethod.CASH},
    ];

    const getData = () => {
        if (params.id) {
            dispatch(setEventToGet(params.id))
            dispatch(getEvent());
        }
    };

    useEffect(() => {
        getData();
    }, [params]);

    const eventDetails = () => {
        return (
            <div>
                {event ? <>
                    <div className="label-field">
                        <a className="label-field-left">{t('event.name')}:</a>
                        <a className="label-field-right">{event.name}</a>
                    </div>
                    <div className="label-field">
                        <a className="label-field-left">{t('event.date-time')}:</a>
                        <a className="label-field-right">{dateToString_precise(new Date(event.dateTime.toString()))}</a>
                    </div>
                    <div className="label-field">
                        <a className="label-field-left">{t('event.location')}:</a>
                        <a className="label-field-right">{event.location}</a>
                    </div>
                    <div className="label-field">
                        <a className="label-field-left">{t('event.participants')}:</a>
                        <div className="label-field-right">
                            {participantsTable(event.participants)}
                        </div>
                    </div>
                </> : <>Loading...</>}
            </div>
        );
    };

    const participantsTable = (participants: Participant[]) => {
        return (
            <ParticipantsTable participants={participants} />
        );
    };

    const participantType_radio = () => {
        return (
            <div className="label-field">
                <div className="label-field-right participant-type-btns">
                    <div className="flex align-items-center participant-type-btn">
                        <RadioButton inputId="partType_person" name="person" value={ParticipantType.PERSON} onChange={(e) => setParticipantType(e.value)} checked={participantType === ParticipantType.PERSON} />
                        <label htmlFor="partType_person" className="ml-2 participant-type-btn-label">{t('participant.type.person')}</label>
                    </div>
                    <div className="flex align-items-center participant-type-btn margin-left-1rem">
                        <RadioButton inputId="partType_organization" name="organization" value={ParticipantType.ORGANIZATION} onChange={(e) => setParticipantType(e.value)} checked={participantType === ParticipantType.ORGANIZATION} />
                        <label htmlFor="partType_organization" className="ml-2 participant-type-btn-label">{t('participant.type.organization')}</label>
                    </div>
                </div>
            </div>
        );
    };

    const participantForm_person = () => {
        return (
            <div>
                <div className="new-participant-form">
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="firstName">{t('participant.person.first-name')}:</label>
                        <InputText className="label-field-right" id="firstName" value={newParticipant_person.firstName} onChange={(e) => setNewParticipant_person({...newParticipant_person, firstName: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="lastName">{t('participant.person.last-name')}:</label>
                        <InputText className="label-field-right" id="lastName" value={newParticipant_person.lastName} onChange={(e) => setNewParticipant_person({...newParticipant_person, lastName: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="personalCode">{t('participant.person.personal-code')}:</label>
                        <InputNumber className="label-field-right" id="personalCode" value={newParticipant_person.personalCode} onChange={(e) => setNewParticipant_person({...newParticipant_person, personalCode: e.value!})} useGrouping={false} maxLength={11} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="paymentMethod">{t('participant.person.payment-method')}:</label>
                        <Dropdown className="label-field-right" id="paymentMethod" options={paymentMethodOptions} optionLabel="name" value={newParticipant_person.paymentMethod.valueOf()} onChange={(e) => setNewParticipant_person({...newParticipant_person, paymentMethod: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="additionalInfo">{t('participant.person.additional-info')}:</label>
                        <InputTextarea className="label-field-right" id="additionalInfo" value={newParticipant_person.additionalInfo} onChange={(e) => setNewParticipant_person({...newParticipant_person, additionalInfo: e.target.value})} autoResize maxLength={1500} />
                    </div>
                </div>
            </div>
        );
    };

    const participantForm_organization = () => {
        return (
            <div>
                <div className="new-participant-form">
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="name">{t('participant.organization.name')}:</label>
                        <InputText className="label-field-right" id="name" value={newParticipant_organization.name} onChange={(e) => setNewParticipant_organization({...newParticipant_organization, name: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="registrationCode">{t('participant.organization.registration-code')}:</label>
                        <InputNumber className="label-field-right" id="registrationCode" value={newParticipant_organization.registrationCode} onChange={(e) => setNewParticipant_organization({...newParticipant_organization, registrationCode: e.value!})} useGrouping={false} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="participants">{t('participant.organization.participants')}:</label>
                        <InputNumber className="label-field-right" id="participants" value={newParticipant_organization.participants} onChange={(e) => setNewParticipant_organization({...newParticipant_organization, participants: e.value!})} useGrouping={false} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="paymentMethod">{t('participant.organization.payment-method')}:</label>
                        <Dropdown className="label-field-right" id="paymentMethod" options={paymentMethodOptions} optionLabel="name" value={newParticipant_organization.paymentMethod} onChange={(e) => setNewParticipant_organization({...newParticipant_organization, paymentMethod: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="additionalInfo">{t('participant.organization.additional-info')}:</label>
                        <InputTextarea className="label-field-right" id="additionalInfo" value={newParticipant_organization.additionalInfo} onChange={(e) => setNewParticipant_organization({...newParticipant_organization, additionalInfo: e.target.value})} autoResize maxLength={5000} />
                    </div>
                </div>
            </div>
        );
    };

    const participantForm = () => {
        return (
            <div>
                {participantType === ParticipantType.PERSON ? <>{participantForm_person()}</> : <>{participantForm_organization()}</>}
            </div>
        );
    };

    const save = async () => {
        let newParticipant: Participant = {id: null, person: null, organization: null}
        let requirementsMet: boolean = false;
        if (participantType === ParticipantType.PERSON) {
            // check all required fields
            const per = newParticipant_person;
            if (!isAnyStringBlank([per.firstName, per.lastName]) &&
                per.personalCode.toString().length === 11 && per.paymentMethod) {
                requirementsMet = true;
                newParticipant.person = newParticipant_person;
            }
        }
        if (participantType === ParticipantType.ORGANIZATION) {
            // check all required fields
            const org = newParticipant_organization
            if (!isAnyStringBlank([org.name]) &&
                org.registrationCode !== 0 && org.participants > 0 && org.paymentMethod) {
                requirementsMet = true;
                newParticipant.organization = newParticipant_organization;
            }
        }
        if (requirementsMet && (newParticipant.person || newParticipant_organization)) {
            // dispatch(setParticipantToSave(newParticipant));
            // await dispatch(saveParticipant())
            //     .then(unwrapResult)
            //     .then(r => {
            //         console.log(r)
            //         let newEvent = cloneDeep(event);
            //         newEvent.participants.push(r);
            //         dispatch(setEventToSave(newEvent));
            //         dispatch(saveEvent())
            //             .then(r2 => console.log(r2));
            //         getData();
            //     })
            //     .catch(error => window.alert(error));
            let newEvent = cloneDeep(event);
            newEvent.participants.push(newParticipant);
            dispatch(setEventToSave(newEvent));
            await dispatch(saveEvent())
                .then(r => {
                    console.log(r);
                })
                .catch(error => console.error(error))
                .finally(() => window.location.reload());
        } else window.alert("required fields are empty");
    };

    const participantFromButtons = () => {
        return (
            <div className="new-participant-buttons">
                <Button className="new-participant-buttons-back" onClick={() => window.history.back()} label={t('event.new-event-back-btn')} />
                <Button className="new-participant-buttons-add" onClick={save} label={t('event.new-event-add-btn')} />
            </div>
        );
    };

    return (
        <div className="page">
            <PageHeadComponent text={t('event.participants')} />
            <div className="page-container">
                <div className="page-title">{t('event.participants')}</div><br />
                {eventDetails()}<br />
                <div className="page-title">{t('event.participants-add')}</div><br />
                {participantType_radio()}
                {participantForm()}
                {participantFromButtons()}
            </div>
        </div>
    );
};
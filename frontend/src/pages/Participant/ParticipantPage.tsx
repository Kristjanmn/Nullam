import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isAnyStringBlank } from '../../utils/string-utils';
import {
    Organization,
    Participant,
    Person,
    setParticipantToGet,
    setParticipantToSave
} from '../../features/participant/participantSlice';
import { cloneDeep } from 'lodash';
import { getParticipant, saveParticipant } from '../../features/participant/participantActions';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import PageHeadComponent from '../../components/PageHeadComponent';
import { Button } from 'primereact/button';
import { PaymentMethod } from '../../enums/paymentMethod';

type ParticipantPageProps = {};

export const ParticipantPage: React.FC<ParticipantPageProps> = (props: ParticipantPageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const params = useParams();
    const participant = useAppSelector((state) => state.participant.participant);
    const [participant_person, setParticipant_person] = useState<Person>();
    const [participant_organization, setParticipant_organization] = useState<Organization>();
    const paymentMethodOptions = [
        { name: `${t('generic.payment-method.bank-transaction')}`, value: PaymentMethod.BANK_TRANSACTION},
        { name: `${t('generic.payment-method.cash')}`, value: PaymentMethod.CASH},
    ];

    const getData = async () => {
        if (params.id) {
            dispatch(setParticipantToGet(params.id));
            dispatch(getParticipant());
        }
    };

    useEffect(() => {
        getData();
    }, [params]);
    useEffect(() => {
        if (participant.person)
            setParticipant_person(cloneDeep(participant.person));
        if (participant.organization)
            setParticipant_organization(cloneDeep(participant.organization));
    }, [participant])

    const save = async () => {
        let newParticipant: Participant = cloneDeep(participant);
        if (participant_person) {
            // check all required fields
            const per = participant_person;
            if (isAnyStringBlank([per.firstName, per.lastName]) &&
                per.personalCode.toString().length !== 11 && !per.paymentMethod) {
                return;
            }
            newParticipant.person = participant_person;
        }
        if (participant_organization) {
            // check all required fields
            const org = participant_organization;
            if (isAnyStringBlank([org.name]) &&
                org.registrationCode === 0 && org.participants ! > 0 && !org.paymentMethod) {
                return;
            }
            newParticipant.organization = participant_organization;
        }
        dispatch(setParticipantToSave(participant));
        await dispatch(saveParticipant())
            .catch(error => console.error(error));
    }

    const participantForm_person = () => {
        return (
            <div>{participant_person ?
                <div className="new-participant-form">
                    <div className="label-field">
                        <label className="label-field-left"
                               htmlFor="firstName">{t('participant.person.first-name')}:</label>
                        <InputText className="label-field-right" id="firstName" value={participant_person.firstName}
                                   onChange={(e) => setParticipant_person({
                                       ...participant_person,
                                       firstName: e.target.value
                                   })}/>
                    </div>
                    <div className="label-field">
                        <label className="label-field-left"
                               htmlFor="lastName">{t('participant.person.last-name')}:</label>
                        <InputText className="label-field-right" id="lastName" value={participant_person.lastName}
                                   onChange={(e) => setParticipant_person({
                                       ...participant_person,
                                       lastName: e.target.value
                                   })}/>
                    </div>
                    <div className="label-field">
                        <label className="label-field-left"
                               htmlFor="personalCode">{t('participant.person.personal-code')}:</label>
                        <InputNumber className="label-field-right" id="personalCode"
                                     value={participant_person.personalCode}
                                     onChange={(e) => setParticipant_person({
                                         ...participant_person,
                                         personalCode: e.value!
                                     })} useGrouping={false} maxLength={11}/>
                    </div>
                    <div className="label-field">
                        <label className="label-field-left"
                               htmlFor="paymentMethod">{t('participant.person.payment-method')}:</label>
                        <Dropdown className="label-field-right" id="paymentMethod"
                                  options={paymentMethodOptions}
                                  optionLabel="name"
                                  value={participant_person.paymentMethod.toString()}
                                  onChange={(e) => setParticipant_person({...participant_person, paymentMethod: e.target.value})}/>
                    </div>
                    <div className="label-field">
                        <label className="label-field-left"
                               htmlFor="additionalInfo">{t('participant.person.additional-info')}:</label>
                        <InputTextarea className="label-field-right" id="additionalInfo"
                                       value={participant_person.additionalInfo}
                                       onChange={(e) => setParticipant_person({
                                           ...participant_person,
                                           additionalInfo: e.target.value.valueOf()
                                       })} autoResize maxLength={1500}/>
                    </div>
                </div> : <></>}
            </div>
        );
    };
    const participantForm_organization = () => {
        return (
            <div>{participant_organization ?
                <div className="new-participant-form">
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="name">{t('participant.organization.name')}:</label>
                        <InputText className="label-field-right" id="name" value={participant_organization.name} onChange={(e) => setParticipant_organization({...participant_organization, name: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="registrationCode">{t('participant.organization.registration-code')}:</label>
                        <InputNumber className="label-field-right" id="registrationCode" value={participant_organization.registrationCode} onChange={(e) => setParticipant_organization({...participant_organization, registrationCode: e.value!})} useGrouping={false} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="participants">{t('participant.organization.participants')}:</label>
                        <InputNumber className="label-field-right" id="participants" value={participant_organization.participants} onChange={(e) => setParticipant_organization({...participant_organization, participants: e.value!})} useGrouping={false} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="paymentMethod">{t('participant.organization.payment-method')}:</label>
                        <Dropdown className="label-field-right" id="paymentMethod" options={paymentMethodOptions} optionLabel="name" value={participant_organization.paymentMethod.valueOf()} onChange={(e) => setParticipant_organization({...participant_organization, paymentMethod: e.target.value})} />
                    </div>
                    <div className="label-field">
                        <label className="label-field-left" htmlFor="additionalInfo">{t('participant.organization.additional-info')}:</label>
                        <InputTextarea className="label-field-right" id="additionalInfo" value={participant_organization.additionalInfo} onChange={(e) => setParticipant_organization({...participant_organization, additionalInfo: e.target.value})} autoResize maxLength={5000} />
                    </div>
                </div> : <></>}
            </div>
        );
    };
    const participantForm = () => {
        return (
            <div>
                {participant.person ? <>{participantForm_person()}</> : <>{participantForm_organization()}</>}
            </div>
        );
    };

    const participantFormButtons = () => {
        return (
            <div className="new-participant-buttons">
                <Button className="new-participant-buttons-back" onClick={() => window.history.back()} label={t('participant.back')} />
                <Button className="new-participant-buttons-add" onClick={save} label={t('participant.save')} />
            </div>
        );
    };

    return (
        <div className="page">
            <PageHeadComponent text={t('participant.participant-info')} />
            <div className="page-container">
                <div className="page-title">{t('participant.participant-info')}</div><br />
                {participant ? <>
                    {participantForm()}
                    {participantFormButtons()}
                </> : <>Loading...</>}
            </div>
        </div>
    );
};
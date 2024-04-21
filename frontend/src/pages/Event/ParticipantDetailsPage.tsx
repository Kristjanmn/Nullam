import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeadComponent from '../../components/PageHeadComponent';

type ParticipantDetailsPageProps = {};

export const ParticipantDetailsPage: React.FC<ParticipantDetailsPageProps> = (props: ParticipantDetailsPageProps) => {
    const { t } = useTranslation();
    const params = useParams();

    const participant_person = () => {
        return (
            <></>
        );
    };

    const participant_organization = () => {
        return (
            <></>
        );
    };

    useEffect(() => {
    }, []);

    return (
        <div className="page">
            <PageHeadComponent text={t('participant.participant-info')} />
            <div className="page-container">
                <div className="page-title">{t('participant.participant-info')}</div>
            </div>
        </div>
    );
};
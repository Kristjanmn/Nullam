import { useTranslation } from 'react-i18next';
import React from 'react';

type ParticipantDetailsPageProps = {};

export const ParticipantDetailsPage: React.FC<ParticipantDetailsPageProps> = (props: ParticipantDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <>Participant details</>
    )
}
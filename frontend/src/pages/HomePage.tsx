import React from 'react';
import { useTranslation } from 'react-i18next';

type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    const { t } = useTranslation()

    return (
        <>homepage</>
    );
};
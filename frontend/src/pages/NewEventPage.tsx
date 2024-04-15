import { useTranslation } from 'react-i18next';

type NewEventPageProps = {};

export const NewEventPage: React.FC<NewEventPageProps> = (props: NewEventPageProps) => {
    const { t } = useTranslation();

    return (
        <>New event page</>
    );
};
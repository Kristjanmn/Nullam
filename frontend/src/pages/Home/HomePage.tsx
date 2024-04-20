import React from 'react';
import { useTranslation } from 'react-i18next';
import { Splitter, SplitterPanel } from 'primereact/splitter';

type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    const { t } = useTranslation()

    const infoPanel = () => {
        return (
            <>
                <Splitter className="info-panel">
                    <SplitterPanel className="flex alight-items-center justify-content-center">
                        <div className="info-panel-left">
                            <div className="info-panel-text">
                                {t('home.info-text')}
                            </div>
                        </div>
                    </SplitterPanel>
                    <SplitterPanel className="flex alight-items-center justify-content-center">
                        <img className="info-panel-image" src={`//${window?.top?.location.host}/pilt.jpg`} alt="image" />
                    </SplitterPanel>
                </Splitter>
            </>
        );
    };

    return (
        <>
            {infoPanel()}
        </>
    );
};
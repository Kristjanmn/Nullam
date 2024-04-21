import { Splitter, SplitterPanel } from 'primereact/splitter';
import React, { FC } from 'react';

type PageHeadComponentProps = {
    text: string;
}

export const PageHeadComponent: FC<PageHeadComponentProps> = (props: PageHeadComponentProps) => {
    return (
        <>
            <Splitter className="page-head">
                <SplitterPanel size={25}>
                    <div className="page-head-text">{props.text}</div>
                </SplitterPanel>
                <SplitterPanel size={75}><img className="page-head-image" src={`//${window?.top?.location.host}/libled.jpg`} alt="banner"/></SplitterPanel>
            </Splitter>
        </>
    );
};

export default PageHeadComponent;
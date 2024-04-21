import { Participant } from '../../features/participant/participantSlice';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { getColumns } from './ParticipantsColumn';
import { Column } from 'primereact/column';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isDateInFuture } from '../../utils/date-utils';

type ParticipantsTableProps = {
    participants: Participant[];
};

const ParticipantsTable: React.FC<ParticipantsTableProps> = (props: ParticipantsTableProps)  => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const eventRef = useAppSelector((state) => state.event.selectedEvent);
    const columns = getColumns(t, navigate, dispatch, isDateInFuture(new Date(eventRef.dateTime)), eventRef);

    const columnComponents = useMemo(() =>
        columns.map((col) => {
            return (
                <Column
                    headerClassName="event-participants-table-header"
                    className="event-participants-table-column"
                    key={col.field}
                    field={col.field}
                    header={col.header}
                    body={col.body}
                />
            );
        }), [columns]
    );

    return (
        <>
            {props.participants.length > 0 ? <>
                <DataTable
                    selectionMode="single"
                    className="event-participants-table"
                    dataKey="id"
                    value={props.participants}>
                    {columnComponents}
                </DataTable></> : <>{t('event.participants-table-empty')}</>}
        </>
    );
};

export default ParticipantsTable;
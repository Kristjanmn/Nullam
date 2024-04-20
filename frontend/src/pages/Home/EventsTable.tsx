import { useTranslation } from 'react-i18next';
import { getColumns } from './EventsColumns';
import { DataTable } from 'primereact/datatable';
import React, { useMemo } from 'react';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import { Event } from '../../features/event/eventSlice';

type EventsTableProps = {
    events: Event[];
    canRemove?: boolean;
};

const EventsTable: React.FC<EventsTableProps> = (props: EventsTableProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const columns = getColumns(t, navigate, props.canRemove || false);

    const columnComponents = useMemo(() =>
        columns.map((col) => {
            return (
                <Column
                    headerClassName="home-events-table-header"
                    className="home-events-table-column"
                    key={col.field}
                    field={col.field}
                    header={col.header}
                    body={col.body} />
            );
        }), [columns]
    );

    return (
        <DataTable
            selectionMode="single"
            className="home-events-table"
            dataKey="id"
            value={props.events}
        >
            {columnComponents}
        </DataTable>
    );
}

export default EventsTable;
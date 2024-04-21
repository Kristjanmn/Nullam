import { Participant } from '../../features/participant/participantSlice';
import { setParticipantToRemove } from '../../features/event/eventSlice';
import { removeParticipantFromEvent } from '../../features/event/eventActions';

export const getColumns = (t: any, navigate: any, dispatch: any, canEdit: boolean, eventRef: Event) => {
    return [
        {
            field: 'name',
            header: t('participant.name'),
            body: (participant: Participant) => nameTemplate(participant.organization?.name || participant.person?.firstName+" "+participant.person?.lastName || 'ERR')
        },
        {
            field: 'code',
            header: t('participant.code'),
            body: (participant: Participant) => codeTemplate(participant.person?.personalCode || participant.organization?.registrationCode || -1)
        },
        {
            field: 'buttons',
            header: t('participants.buttons'),
            body: (participant: Participant) => buttonsTemplate(participant.id || -1, t('event.participants-item-show'), () => {
                navigate(`/participant/${participant.id}`)
            }, canEdit, t('event.participants-item-remove'), () => {
                dispatch(setParticipantToRemove({event: eventRef, participant: participant}))
                dispatch(removeParticipantFromEvent());
            })
        }
    ];
};

const nameTemplate = (name: string) => {
    return (
        <div className="display-inline">{name}</div>
    );
};

const codeTemplate = (code: number) => {
    return (
        <div className="display-inline">{code}</div>
    );
};

const buttonsTemplate = (participantId: number, labelShow: string, showFunction: () => void, canEdit: boolean, labelRemove: string, removeFunction: () => void) => {
    return (
        <div className="event-participants-item">
            <b className="event-participants-item-btn" onClick={showFunction}>{labelShow}</b>
            {canEdit ? <><b className="event-participants-item-btn margin-left-1rem" onClick={removeFunction}>{labelRemove}</b></> : <></>}
        </div>
    );
};
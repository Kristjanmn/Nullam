import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/api';
import {
    setPastEvents,
    setUpcomingEvents,
    setSelectedEvent,
    clearEventToSave,
    clearEventToGet, clearEventToDelete, setEventToSave
} from './eventSlice';
import { HttpStatusCode } from 'axios';
import { RootState } from '../../app/store';
import { cloneDeep } from 'lodash';
import { Participant } from '../participant/participantSlice';

export const getEvents = createAsyncThunk(
    'event/getEvents',
    async () => {
        await API.get('event/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }
);

export const getUpcomingEvents = createAsyncThunk(
    'event/getUpcomingEvents',
    async (args, { dispatch}) => {
        await API.get('event/upcoming')
            .then(response => {
                dispatch(setUpcomingEvents(response.data));
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }
);

export const getPastEvents = createAsyncThunk(
    'event/getPastEvents',
    async (args, { dispatch }) => {
        await API.get('event/past')
            .then(response => {
                dispatch(setPastEvents(response.data));
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }
);

export const getEvent = createAsyncThunk(
    'event/getById',
    async (arg, { getState, dispatch }) => {
        const state: RootState = getState();
        await API.get(`event/${state.event.eventToGet}`)
            .then(response => {
                dispatch(setSelectedEvent(response.data));
            })
            .catch(error => {
                console.error(error);
                return error;
            })
            .finally(() => dispatch(clearEventToGet()));
    }
);

export const saveEvent = createAsyncThunk(
    'event/save',
    async (args, { getState, dispatch }) => {
        const state: RootState = getState();
        await API.post('event/', state.event.eventToSave)
            .then(response => {
                if (response.status === HttpStatusCode.Ok && response.data.id) {
                    dispatch(setSelectedEvent(response.data));
                    return response.data.id;
                }
            })
            .catch(error => {
                console.error(error);
                return error;
            })
            .finally(() => dispatch(clearEventToSave()));
    }
);

export const deleteEvent = createAsyncThunk(
    'event/delete',
    async (args, { getState, dispatch }) => {
        const state: RootState = getState();
        await API.delete(`event/${state.event.eventToDelete.id}`)
            .then(() => {
            })
            .catch(error => {
                console.error(error);
                return error;
            })
            .finally(dispatch(clearEventToDelete));
    }
);

export const removeParticipantFromEvent = createAsyncThunk(
    'event/removeParticipant',
    async (args, { getState, dispatch }) => {
        const state: RootState = getState();
        let newEvent = cloneDeep(state.event.participantToRemove_event);
        let newEvent_participants: Participant[] = [];
        newEvent.participants.forEach((participant: Participant) => {
            if (participant !== state.event.participantToRemove_participant)
                newEvent_participants.push(participant);
        });
        newEvent.participants = newEvent_participants;
        dispatch(setEventToSave(newEvent));
        await dispatch(saveEvent())
            .then(() => {})
            .catch((error) => {
                console.error(error);
                return error;
            })
            .finally(() => dispatch(clearEventToSave()));
    }
)
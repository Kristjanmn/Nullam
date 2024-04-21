import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/api';
import { clearParticipantToGet, clearParticipantToSave, setParticipant } from './participantSlice';
import { HttpStatusCode } from 'axios';
import { RootState } from '../../app/store';

export const getParticipant = createAsyncThunk(
    'participant/getById',
    async (args, { getState, dispatch }) => {
        const state: RootState = getState();
        if (state.participant.participantToGet === undefined) return;
        API.get(`participant/${state.participant.participantToGet}`)
            .then(response => {
                dispatch(setParticipant(response.data));
            })
            .catch(error => {
                console.error(error);
                return error;
            })
            .finally(() => dispatch(clearParticipantToGet()));
    }
);

export const saveParticipant = createAsyncThunk(
    'participant/save',
    async (arg, { getState, dispatch }) => {
        const state: RootState = getState();
        await API.post('participant/', state.participant.participantToSave)
            .then(response => {
                if (response.status === HttpStatusCode.Ok)
                    return response.data;
            })
            .catch(error => {
                console.error(error);
                return error;
            })
            .finally(() => dispatch(clearParticipantToSave()));
    }
);
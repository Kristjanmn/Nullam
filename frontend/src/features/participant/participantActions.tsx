import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/api';
import { clearParticipantToSave, setParticipant } from './participantSlice';
import { HttpStatusCode } from 'axios';
import { RootState } from '../../app/store';

export const getParticipant = createAsyncThunk(
    'participant/getById',
    async (id: number, { dispatch }) => {
        API.get(`participant/${id}`)
            .then(response => {
                dispatch(setParticipant(response.data))
                return response;
            })
            .catch(error => {
                console.error(error);
                return error;
            });
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
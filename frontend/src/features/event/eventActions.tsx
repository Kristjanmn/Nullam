import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/api';
import { RootState } from '../../app/store';
import { setPastEvents, setUpcomingEvents } from './eventSlice';

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
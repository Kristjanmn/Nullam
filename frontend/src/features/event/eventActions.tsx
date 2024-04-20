import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/api';

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
    async () => {
        await API.get('event/upcoming')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }
);

export const getPastEvents = createAsyncThunk(
    'event/getPastEvents',
    async () => {
        await API.get('event/past')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }
);
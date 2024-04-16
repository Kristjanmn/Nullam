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
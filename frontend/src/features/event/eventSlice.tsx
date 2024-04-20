import { Participant } from '../participant/participantSlice';
import { createSlice } from '@reduxjs/toolkit';

export type Event = {
    id: number;
    name: string;
    dateTime: Date;
    location: string;
    additionalInfo: string;
    participants: Participant[];
};

export type EventState = {}

const initialState: EventState = {};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {}
});

export default eventSlice.reducer;
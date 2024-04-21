import { Participant } from '../participant/participantSlice';
import { createSlice } from '@reduxjs/toolkit';

export type Event = {
    id: number | null;
    name: string;
    dateTime: Date;
    location: string;
    additionalInfo: string;
    participants: Participant[];
};

export type EventState = {
    upcomingEvents: Event[];
    pastEvents: Event[];
    selectedEvent?: Event;
    selectedEventParticipants?: Participant[];
    eventToGet?: number;
    eventToSave?: Event;
    eventToDelete?: Event;
}

const initialState: EventState = {
    upcomingEvents: [],
    pastEvents: []
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setUpcomingEvents: (state, action) => {
            state.upcomingEvents = action.payload;
        },
        setPastEvents: (state, action) => {
            state.pastEvents = action.payload;
        },
        setSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload;
            state.selectedEventParticipants = action.payload.participants;
        },
        setEventToGet: (state, action) => {
            state.eventToGet = action.payload;
        },
        clearEventToGet: (state) => {
            state.eventToGet = undefined;
        },
        setEventToSave: (state, action) => {
            state.eventToSave = action.payload;
        },
        clearEventToSave: (state) => {
            state.eventToSave = undefined;
        },
        setEventToDelete: (state, action) => {
            state.eventToDelete = action.payload;
        },
        clearEventToDelete: (state) => {
            state.eventToDelete = undefined;
        }
    }
});

export const { setUpcomingEvents, setPastEvents, setSelectedEvent, setEventToGet, clearEventToGet, setEventToSave, clearEventToSave, setEventToDelete, clearEventToDelete } = eventSlice.actions;

export default eventSlice.reducer;
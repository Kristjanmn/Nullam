import { PaymentMethod } from '../../enums/paymentMethod';
import { createSlice } from '@reduxjs/toolkit';

export type Participant = {
    id: number | null;
    person: Person | null;
    organization: Organization | null;
};

export type SimpleParticipant = {
    id: number;
    name: string;
    code: number;
    buttons: boolean;
};

export type Person = {
    id: number | null;
    firstName: string;
    lastName: string;
    personalCode: number;
    paymentMethod: PaymentMethod;
    additionalInfo: string;
};

export type Organization = {
    id: number | null;
    name: string;
    registrationCode: number;
    participants: number;
    paymentMethod: PaymentMethod;
    additionalInfo: string;
};

export type ParticipantState = {
    participant: Participant;
    participantToGet?: number;
    participantToSave?: Participant;
};

const initialState: ParticipantState = {
    participant: {id: null, person: null, organization: null}
};

const participantSlice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        setParticipant: (state, action) => {
            state.participant = action.payload;
        },
        setParticipantToGet: (state, action) => {
            state.participantToGet = action.payload;
        },
        clearParticipantToGet: (state) => {
            state.participantToGet = undefined;
        },
        setParticipantToSave: (state, action) => {
            state.participantToSave = action.payload;
        },
        clearParticipantToSave: (state) => {
            state.participantToSave = undefined;
        }
    }
});

export const { setParticipant, setParticipantToGet, clearParticipantToGet, setParticipantToSave, clearParticipantToSave } = participantSlice.actions;

export default participantSlice.reducer;
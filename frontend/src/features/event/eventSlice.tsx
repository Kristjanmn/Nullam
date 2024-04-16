import { Participant } from '../participant/participantSlice';

export type Event = {
    id: number;
    name: string;
    dateTime: Date;
    location: string;
    additionalInfo: string;
    participants: Participant[];
};
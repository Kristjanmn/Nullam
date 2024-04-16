import { PaymentMethod } from '../../enums/paymentMethod';

export type Participant = {
    id: number;
    person: Person;
    organization: Organization;
};

export type Person = {
    id: number;
    firstName: string;
    lastName: string;
    personalCode: number;
    paymentMethod: PaymentMethod;
    additionalInfo: string;
};

export type Organization = {
    id: number;
    name: string;
    registrationCode: number;
    participants: number;
    paymentMethod: PaymentMethod;
    additionalInfo: string;
};
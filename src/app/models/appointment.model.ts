import { Doctor } from './doctor.model';
import { Patient } from './patient.model';

export interface Appointment{
    id: number,
    date: Date,
    period: string,
    doctor: Doctor,
    patient: Patient
}
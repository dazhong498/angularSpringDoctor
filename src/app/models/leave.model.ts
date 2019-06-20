import { Doctor } from './doctor.model';

export interface Leave{
    id: number,
    date: Date,
    reason: string,
    doctor: Doctor,
    status?: string
}
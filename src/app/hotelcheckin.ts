import { Hotelguest } from './hotelguest';

export class Hotelcheckin {
    id: number;
    hotelguest: Hotelguest;
    entryDate: Date;
    outDate: Date;
    ieVehicle: boolean;
    ieStatus: string;
    vlTotal: number;
}
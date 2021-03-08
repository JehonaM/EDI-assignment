import { Time } from "@angular/common";

export interface Slice {

    id: number;
    start: Time;
    end: Time;
    minstart: number;
    minend: number;
}


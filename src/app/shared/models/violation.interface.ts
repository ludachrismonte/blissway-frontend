import { Plate } from "./plate.interface";

export interface Violation {
    id: string;
    roadID?: string;
    preview?: string;
    timestampA?: string;
    timestampB?: string;
    locationA?: string;
    locationB?: string;
    plate?: Plate;
    map?: string;
    postedSpeed?: number;
    speed?: number;
    price?: number;
}
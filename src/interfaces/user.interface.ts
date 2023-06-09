import { Document } from "mongoose";
import { IConfidence } from "./confidence.interface";

export interface IUser extends Document {
    _id: string;
    email: string;
    username: string;
    analytics: {
        played: number,
        letterConfidences: { [key: string]: IConfidence },
        scores: {
            date: Date,
            played: number,
            speed: number,
            letterConfidences: { [key: string]: IConfidence }
        }[]
    }
}




import { HydratedDocument } from 'mongoose';
import { Track } from './track.schema';
import * as mongoose from 'mongoose';
export type TrackDocument = HydratedDocument<Track>;
export declare class Track {
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[];
    audio: string;
}
export declare const TrackSchema: mongoose.Schema<Track, mongoose.Model<Track, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Track>;

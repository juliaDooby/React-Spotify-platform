import { ObjectId } from 'mongoose';
export declare class CreateCommentDto {
    readonly username: string;
    readonly text: string;
    readonly trackId: ObjectId;
}

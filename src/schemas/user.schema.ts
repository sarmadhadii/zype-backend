import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAnalytics } from 'src/interfaces/analytics.interface';

export type UserDocument = Document<User>;

@Schema({collection: 'users'}) 
export class User {
    @Prop() 
    _id: string;

    @Prop()
    email: string;

    @Prop()
    username: string;

    @Prop({ type: () => ({}) })
    analytics: IAnalytics;
}

export const UserSchema = SchemaFactory.createForClass(User);  

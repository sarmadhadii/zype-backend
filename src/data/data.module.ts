import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/zype'),
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema }
        ])
    ],
    controllers: [DataController],
    providers: [
        UserService
    ],
    exports: [
        UserService
    ]
})
export class DataModule { }

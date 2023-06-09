import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/interfaces/user.interface';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    public async getUserById(_id: string): Promise<User> {
        return this.userModel.findOne({ _id: _id }).exec();
    }

    public async getUserByUsername(username: string): Promise<User> {
        return this.userModel.findOne({ username: username }).exec();
    }

    public async updateUserAnalytics(user: IUser): Promise<User> {
        return this.userModel.findOneAndUpdate({ _id: user._id }, { analytics: user.analytics }).exec();
    }

    public async updateUser(user: IUser): Promise<User> {
        return this.userModel.findOneAndUpdate({ _id: user._id }, user).exec();
    }

    public async createUser(user: IUser): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

}

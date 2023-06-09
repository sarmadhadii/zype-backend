import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { IUser } from 'src/interfaces/user.interface';
import { UserService } from 'src/services/user.service';

@Controller()
export class DataController {

    constructor(private readonly userService: UserService) { }

    @Get('getUserById/:id')
    async returnUserById(@Param() params: any): Promise<IUser | undefined> {
        try {
            const user = await this.userService.getUserById(params.id);
            return user as IUser;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
    
    @Get('getUserByUsername/:username')
    async returnUserByUsername(@Param() params: any): Promise<IUser | undefined> {
        try {
            const user = await this.userService.getUserById(params.username);
            return user as IUser;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    @Post('updateUserAnalytics')
    async updateUserAnalytics(@Body() user: UserDto): Promise<IUser> {
        try {
            const updatedUser = await this.userService.updateUserAnalytics(user as IUser);
            return updatedUser as IUser;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    @Post('updateUser')
    async updateUser(@Body() user: UserDto): Promise<IUser> {
        try {
            const updatedUser = await this.userService.updateUser(user as IUser);
            return updatedUser as IUser;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    @Post('createUser')
    async createUser(@Body() user: UserDto): Promise<IUser> {
        try {
            const createdUser = await this.userService.createUser(user as IUser);
            return createdUser as IUser;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
    
}

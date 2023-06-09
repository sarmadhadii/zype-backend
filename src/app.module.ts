import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';

@Module({
    imports: [
        DataModule,
    ],
    providers: [AppService],
})
export class AppModule { }

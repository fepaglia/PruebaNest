import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://admin1:1234@cluster0.qpiwfcg.mongodb.net/?retryWrites=true&w=majority"), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

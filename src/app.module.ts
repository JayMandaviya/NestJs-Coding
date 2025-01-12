import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { IngestionModule } from './ingestion/ingestion.module';
import { DocumentModule } from './document/document.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
    DocumentModule,
    IngestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

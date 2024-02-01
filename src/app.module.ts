import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EhrModule } from './ehr/ehr.module';
import { BasysModule } from './basys/basys.module';
import { CmmModule } from './cmm/cmm.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [EhrModule, BasysModule, CmmModule,ConfigModule.forRoot()],
})
export class AppModule {}

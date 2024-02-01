import { Module } from '@nestjs/common';
import { BasysController } from './basys.controller';
import { BasysService } from './basys.service';
import { EhrModule } from 'src/ehr/ehr.module';
import { CmmModule } from 'src/cmm/cmm.module';

@Module({
  imports: [EhrModule, CmmModule],
  controllers: [BasysController],
  providers: [BasysService],
})
export class BasysModule {}

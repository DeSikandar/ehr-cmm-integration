import { Module } from '@nestjs/common';
import { CmmController } from './cmm.controller';
import { CmmService } from './cmm.service';

@Module({
  controllers: [CmmController],
  providers: [CmmService],
  exports: [CmmService],
})
export class CmmModule {}

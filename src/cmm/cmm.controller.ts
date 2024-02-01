import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CMMData, ResponseDto } from './dto/cmm.dto';
import { CmmService } from './cmm.service';

@Controller('cmm')
@ApiTags('CMM')
export class CmmController {
  constructor(private readonly cmmService: CmmService) {}

  @ApiOkResponse({
    type: ResponseDto,
    description: 'CMM Response',
  })
  @Post()
  async send_to_cmm(@Body() data: CMMData) {
    return this.cmmService.send_to_cmm(data);
  }
}

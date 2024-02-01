import { Controller, HttpCode, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BasysService } from './basys.service';
import { EHRFilter } from 'src/ehr/dto/query.dto';
import { ResponseDto } from 'src/cmm/dto/cmm.dto';

@Controller('basys')
@ApiTags('basys')
export class BasysController {
  constructor(private readonly basysService: BasysService) {}

  @ApiOkResponse({
    type: ResponseDto,
    description: 'Data processed and submitted to CMM',
  })
  @Post()
  @HttpCode(200)
  async process_and_submit_to_CMM(@Query() filter: EHRFilter) {
    return this.basysService.process_and_submit_to_CMM(filter);
  }
}

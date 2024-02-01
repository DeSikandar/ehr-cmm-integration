import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EhrService } from './ehr.service';
import { EHRFilter } from './dto/query.dto';
import { EHR } from './interface/ehr.interface';

@Controller('ehr')
@ApiTags('EHR')
export class EhrController {
  constructor(private readonly ehrService: EhrService) {}

  @ApiOkResponse({
    type: EHR,
    isArray: true,
    description: 'EHR Data',
  })
  @Get()
  async fetch_ehr_data(@Query() filter: EHRFilter) {
    return this.ehrService.fetch_ehr_data(filter);
  }
}

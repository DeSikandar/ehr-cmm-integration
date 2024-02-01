import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class EHRFilter {
  @IsOptional()
  @ApiPropertyOptional()
  patientId: string;

  @IsOptional()
  @ApiPropertyOptional()
  labID: string;
}

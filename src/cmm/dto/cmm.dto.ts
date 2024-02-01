import { ApiProperty } from '@nestjs/swagger';

export class CMMData {
  @ApiProperty()
  patientId: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  dob: Date;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  zip: number;
  @ApiProperty()
  labID: string;
}

export class ResponseDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  status: string;
}

import { ApiProperty } from '@nestjs/swagger';

export interface EHRInterface {
  patientId: string;
  firstName: string;
  lastName: string;
  dob: Date;
  gender: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  labID: string;
}

export class EHR {
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

  @ApiProperty()
  insurance_token: string;

  @ApiProperty()
  prescription_token: string;
}

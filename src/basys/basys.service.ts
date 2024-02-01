import { Injectable, NotFoundException } from '@nestjs/common';
import { CmmService } from 'src/cmm/cmm.service';
import { CMMData } from 'src/cmm/dto/cmm.dto';
import { EHRFilter } from 'src/ehr/dto/query.dto';
import { EhrService } from 'src/ehr/ehr.service';

@Injectable()
export class BasysService {
  constructor(
    private readonly ehrService: EhrService,
    private readonly cmmService: CmmService,
  ) {}

  process_and_submit_to_CMM(filter: EHRFilter) {
    const data = this.ehrService.fetch_ehr_data(filter);
    if (!data) {
      throw new NotFoundException('EHR data not found');
    }
    const send_data: CMMData = {
      patientId: data.patientId,
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      gender: data.gender,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      labID: data.labID,
      prescription_token: data.prescription_token,
      insurance_token: data.insurance_token,
    };
    const res = this.cmmService.send_to_cmm(send_data);
    if (res.status == 200) {
      return { message: 'Data process and Submitted successfully' };
    } else {
      return res;
    }
  }
}

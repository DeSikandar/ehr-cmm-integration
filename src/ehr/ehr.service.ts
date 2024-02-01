import { Injectable } from '@nestjs/common';
import { EHR } from './interface/ehr.interface';
import { EHRFilter } from './dto/query.dto';
// import axios from 'axios';

@Injectable()
export class EhrService {
  private readonly EHRData: [EHR] = [
    {
      patientId: '123456',
      firstName: 'John',
      lastName: 'Doe',
      dob: new Date(1996, 10, 30),
      gender: 'Male',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: 12345,
      labID: '1344',
      insurance_token: '19sienglo92831n5',
      prescription_token: 'z3q2jr',
    },
  ];

  fetch_ehr_data(filter: EHRFilter) {
    //get the data from the eClinicalWorks
    // axios.get('http://eClinicalWorksURL').then(res=>{
    //     return res
    // })
    const data = this.EHRData;
    if (filter.labID && filter.patientId) {
      return data.filter(
        (item) =>
          item.patientId == filter.patientId && item.labID == filter.labID,
      )[0];
    } else if (filter.labID) {
      return data.filter((item) => item.labID == filter.labID)[0];
    } else if (filter.patientId) {
      return data.filter((item) => item.patientId == filter.patientId)[0];
    }
  }
}

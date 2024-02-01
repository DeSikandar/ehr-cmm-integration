import { Injectable } from '@nestjs/common';
import { CMMData } from './dto/cmm.dto';
import axios from 'axios';

@Injectable()
export class CmmService {
  async send_to_cmm(data: CMMData) {
    try{
      // send this data to cmm api
      const resp = await axios.post(
        'https://api.truepill.com/v1/prior_authorization',
        data,
        {
          headers: {
            Authorization: process.env.CMM_AUTH_TOKEN,
            'Content-Type': 'application/json',
          },
        },
      );

      return resp
    }
    catch(err){
      return err.message
    }
    // console.info('this data going to send to CMM', data);
    // return {
    //   message: 'Data submitted successfully',
    //   status: 200,
    // };
  }
}

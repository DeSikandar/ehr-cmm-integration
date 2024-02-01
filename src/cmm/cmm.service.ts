import { Injectable } from '@nestjs/common';
import { CMMData } from './dto/cmm.dto';
// import axios from 'axios';

@Injectable()
export class CmmService {
  send_to_cmm(data: CMMData) {
    // send this data to cmm api
    // axios.post("http://cmm_url",data).then(res=>{
    //     return res
    // })

    console.info('this data going to send to CMM', data);
    return {
      message: 'Data submitted successfully',
      status: 200,
    };
  }
}

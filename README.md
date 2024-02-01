## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# API Document

all the api is documented as Swagger so you can access the api details in url : ```http://localhost:3000/doc```

In this project created the three module in the Nestjs 
1. EHR
  i have not find the api details for the eClinicalWorks so assumptions that data should in this format 
  
  ```javascript 
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
  insurance_token: string;
  prescription_token: string;
  ```
  fetch the data from the eClinicalWorks with provided filter and return the response 

2. CMM
  i have simulated the submit prior_authorization form with same data as mansion in the above module 
  and return the response 

3. basys
  in this module imported the service from the EHR and CMM and get the EHR data using the EHR module and process the data like format data according to required for the CMM and submit that data to CMM and if response is success then return the success response 
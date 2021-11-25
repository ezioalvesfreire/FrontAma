
import { Injectable } from '@angular/core';
import { SmartTableDataTherapists } from '../data/smart-table-therapists';

@Injectable()
export class SmartTableServiceTherapists extends SmartTableDataTherapists {

  data = [{
    id: 1,
    firstName: 'Marcia',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  },
   {
    'id': 2,
    'firstName': 'Lorena',
    'lastName': 'Sampaio',
    'username': '@freire',
    'email': 'lorena@sampaio.com',
    'age': 29,
  }];

  getData() {
    return this.data;
  }
}

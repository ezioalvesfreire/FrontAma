import { Injectable } from '@angular/core';
import { SmartTableDataDoctors } from '../data/smart-table-doctors';

@Injectable()
export class SmartTableServiceDoctors extends SmartTableDataDoctors {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  },
   {
    'id': 2,
    'firstName': 'Ezio',
    'lastName': 'Alves Freire',
    'username': '@freire',
    'email': 'alves@freire.com',
    'age': 29,
  }];

  getData() {
    return this.data;
  }
}

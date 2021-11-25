import { Injectable } from '@angular/core';
import { SmartTableDataDoctors } from '../data/smart-table-doctors';

@Injectable()
export class SmartTableServiceDoctors extends SmartTableDataDoctors {

  data = [{
    id: 1,
    Nome: 'Mark',
    CRM: '28',
  },
   {
    'id': 2,
    'Nome': 'Ezio',
    'CRM': 29,
  }];

  getData() {
    return this.data;
  }
}

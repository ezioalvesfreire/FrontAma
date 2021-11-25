
import { Injectable } from '@angular/core';
import { SmartTableDataTherapists } from '../data/smart-table-therapists';

@Injectable()
export class SmartTableServiceTherapists extends SmartTableDataTherapists {

  data = [{
    id: 1,
    Nome: 'Marcia',
    Especialidade: 'Psicoterapia ',


  },
   {
    'id': 2,
    'Nome': 'Lorena',
    'Especialidade': 'Psicoterapia ',


  }];

  getData() {
    return this.data;
  }
}

import { Injectable } from '@angular/core';
import { SmartTableDataGrSession } from '../data/smart-table-gr-session';

@Injectable()
export class SmartTableServiceGrSession extends SmartTableDataGrSession {

  data = [{
    id: 1,
    dataTimeStart: '27/09/2021 14:00',
    dataTimeEnd: '27/09/2021 18:00',
    patientId: 2,
    terapistsId: 2,
    sessaoRealizada:1,
    notes: 'Blá blá blá'
  },
   {
    id: 2,
    dataTimeStart: '27/09/2021 14:00',
    dataTimeEnd: '27/09/2021 18:00',
    patientId: 3,
    terapistsId: 2,
    sessaoRealizada:1,
    notes: 'Qualquer coisa'
  }];

  getData() {
    return this.data;
  }
}

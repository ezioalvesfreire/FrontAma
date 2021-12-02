import { Injectable } from '@angular/core';
import { SmartTableDataGrSession } from '../data/smart-table-gr-session';

@Injectable()
export class SmartTableServiceGrSession extends SmartTableDataGrSession {

  data = [{
    id: 1,
    DataTimeStart: '27/09/2021 14:00',
    DataTimeEnd: '27/09/2021 18:00',
    PatientId: 2,
    TerapistsId: 2,
    SessaoRealizada:1,
    Notes: 'Blá blá blá'
  },
   {
    id: 2,
    DataTimeStart: '27/09/2021 14:00',
    DataTimeEnd: '27/09/2021 18:00',
    PatientId: 2,
    TerapistsId: 2,
    SessaoRealizada:1,
    Notes: 'Qualquer coisa'
  }];

  getData() {
    return this.data;
  }
}

import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table-patients';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    Nome: 'Mark',
    Sexo: 'Masculino',
    DataDeNascimento: '29/05/2000',
    NomeDoResponsavel: 'Joelma Santos',
    Fone: '281133131311',
    TipoSanguineo: 'A+',
  }, {
    id: 2,
    Nome: 'Jacob',
    Sexo: 'Masculino',
    DataDeNascimento: '23/09/2002',
    NomeDoResponsavel: 'Hermineo',
    Fone: '213202302521',
    TipoSanguineo: 'O-',

  }, {
    id: 3,
    Nome: 'Patrícia',
    Sexo: 'Feminino',
    DataDeNascimento: '23/09/2006',
    NomeDoResponsavel: 'Cláudia Pedroso',
    Fone: '215151302521',
    TipoSanguineo: 'B-',
  }, ];

  getData() {
    return this.data;
  }
}

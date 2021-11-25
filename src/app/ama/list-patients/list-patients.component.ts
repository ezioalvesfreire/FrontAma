import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table-patients';


@Component({
  selector: 'ngx-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
   // hideSubHeader: true,
    noDataMessage: "Não há nenhum dados para exibir",
    actions: {
        position: "right",
        columnTitle: "Ações",
       // add: false,
       // edit: false,
        //delete: false
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Nome: {
        title: 'Nome',
        type: 'string',
      },
      Sexo: {
        title: 'Sexo',
        type: 'string',
      },
      DataDeNascimento: {
        title: 'Data de Nascimento',
        type: 'string',
      },
      NomeDoResponsavel: {
        title: 'Nome do Responsável',
        type: 'string',
      },
      Fone: {
        title: 'Fone',
        type: 'number',
      },
      TipoSanguineo: {
        title: 'Tipo Sanguineo',
        type: 'String',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(): void {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}

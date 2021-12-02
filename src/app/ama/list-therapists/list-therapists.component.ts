import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import {SmartTableDataTherapists } from '../../@core/data/smart-table-therapists';


@Component({
  selector: 'ngx-list-therapists',
  templateUrl: './list-therapists.component.html',
  styleUrls: ['./list-therapists.component.scss']
})
export class ListTherapistsComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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
        title: 'CÓD.',
        type: 'number',
      },
      Nome: {
        title: 'Nome',
        type: 'string',
      },
      Especialidade: {
        title: 'Especialidade',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableDataTherapists) {
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

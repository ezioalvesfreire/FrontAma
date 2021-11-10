import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmaComponent } from './ama.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';

const routes: Routes = [{
  path: '', component: AmaComponent,
  children: [
    {
      path: 'list-patients',
      component: ListPatientsComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmaRoutingModule { }

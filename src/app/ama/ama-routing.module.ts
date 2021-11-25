import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmaComponent } from './ama.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { ListTherapistsComponent } from './list-therapists/list-therapists.component';

const routes: Routes = [{
  path: '', component: AmaComponent,
  children: [
    {
      path: 'list-patients',
      component: ListPatientsComponent
    },
    {
      path: 'list-doctor',
      component: ListDoctorComponent
    },
    {
      path: 'list-therapists',
      component: ListTherapistsComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmaRoutingModule { }

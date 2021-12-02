import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

import { AmaRoutingModule } from './ama-routing.module';
import { AmaComponent } from './ama.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { ListTherapistsComponent } from './list-therapists/list-therapists.component';
import { GrSessionComponent } from './gr-session/gr-session.component';

@NgModule({
  declarations: [
    AmaComponent,
    ListPatientsComponent,
    ListDoctorComponent,
    ListTherapistsComponent,
    GrSessionComponent

  ],
  imports: [
    CommonModule,
    AmaRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule

  ]
})
export class AmaModule { }

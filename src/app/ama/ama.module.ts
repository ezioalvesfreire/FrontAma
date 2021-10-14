import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

import { AmaRoutingModule } from './ama-routing.module';
import { AmaComponent } from './ama.component';


@NgModule({
  declarations: [
    AmaComponent
  ],
  imports: [
    CommonModule,
    AmaRoutingModule,
    ThemeModule,
    NbMenuModule
  ]
})
export class AmaModule { }

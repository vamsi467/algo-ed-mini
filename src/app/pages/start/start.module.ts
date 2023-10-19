import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InstructionsComponent } from './instructions/instructions.component';


@NgModule({
  declarations: [
    StartComponent,
    UserDetailsComponent,
    InstructionsComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule
  ]
})
export class StartModule { }

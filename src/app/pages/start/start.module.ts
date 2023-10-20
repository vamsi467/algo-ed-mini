import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    FormsModule
  ]
})
export class StartModule { }

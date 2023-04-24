import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsHomeComponent } from './students-home/students-home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentSearchComponent } from './student-search/student-search.component';


@NgModule({
  declarations: [
    StudentsHomeComponent,
    StudentListComponent,
    StudentSearchComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
  ],
  exports: []
})
export class StudentsModule { }

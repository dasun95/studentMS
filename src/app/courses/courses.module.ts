import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesHomeComponent,
    CourseSearchComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ],
  exports: [
    CoursesHomeComponent
  ]
})
export class CoursesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsHomeComponent } from './students-home/students-home.component';

const routes: Routes = [
  {path:'', component: StudentsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

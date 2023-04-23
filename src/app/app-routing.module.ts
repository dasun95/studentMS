import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'courses', loadChildren: ()=>import('./courses/courses.module').then((m)=>m.CoursesModule)},
  {path: 'register', loadChildren: ()=>import('./register/register.module').then((m)=>m.RegisterModule)},
  { path: 'students', loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule) },
  { path: '', component: HomeComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

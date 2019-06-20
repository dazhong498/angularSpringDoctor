import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrePageComponent } from './erre-page/erre-page.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  },{
    path: "doctor",
    loadChildren: "./doctor/doctor.module#DoctorModule"
  },{
    path: "auth",
    loadChildren: "./authentication/authentication.module#AuthenticationModule"
  },{
    path: "patient",
    loadChildren: "./patient/patient.module#PatientModule"
  },{
    path: "**", component: ErrePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

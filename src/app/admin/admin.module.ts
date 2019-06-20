import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

const adminRoutes: Routes = [
  {
    path: "addDoctor",
    component: AddDoctorComponent
  },{
    path: "doctorList",
    component: DoctorListComponent
  },{
    path: "appointmentList",
    component: AppointmentListComponent
  }
];

@NgModule({
  declarations: [AddDoctorComponent, DoctorListComponent, AppointmentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

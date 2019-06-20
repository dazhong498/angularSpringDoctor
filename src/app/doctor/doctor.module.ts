import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildAppointmentComponent } from './build-appointment/build-appointment.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const doctorRoutes: Routes = [
  {
    path: "applyLeave",
    component: ApplyLeaveComponent
  },{
    path: "appointmentList",
    component: AppointmentListComponent
  },{
    path: "buildAppointment",
    component: BuildAppointmentComponent
  },{
    path: "editProfile",
    component: EditProfileComponent
  }
];

@NgModule({
  declarations: [BuildAppointmentComponent, EditProfileComponent, AppointmentListComponent, ApplyLeaveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(doctorRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }

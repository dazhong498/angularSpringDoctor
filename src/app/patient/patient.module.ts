import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { BookHistoryComponent } from './book-history/book-history.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const patientRoutes: Routes = [
  {
    path: "profile",
    component: EditProfileComponent
  },{
    path: "appointment",
    component: MakeAppointmentComponent
  },{
    path: "history",
    component: BookHistoryComponent
  }
];
@NgModule({
  declarations: [EditProfileComponent, MakeAppointmentComponent, BookHistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(patientRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }

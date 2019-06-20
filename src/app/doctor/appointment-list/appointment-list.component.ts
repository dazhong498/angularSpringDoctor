import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { Appointment } from 'src/app/models/appointment.model';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentList: Appointment[];
  doctor: Doctor;

  constructor(private router: Router,
    private service: DoctorService) { }

  ngOnInit() {
    this.doctor = this.service.currentUser;
    this.service.getDoctorAppointments(this.doctor).subscribe(
      (appointments: any) => {
        this.appointmentList = appointments;
      }
    );
    
  }

  toHome(){
    this.router.navigate([""]);
  }

  toApplyLeave(){
    this.router.navigate(["/doctor/applyLeave"]);
  }

  toBuildAppointment(){
    this.router.navigate(["/doctor/buildAppointment"]);
  }

  toViewAppointment(){
    this.router.navigate(["/doctor/appointmentList"]);
  }

  toEditProfile(){
    this.router.navigate(["/doctor/editProfile"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentList: Appointment[];

  constructor(private router: Router,
    private service: DoctorService) { }

  ngOnInit() {
    this.service.getAllAppointments().subscribe(
      (appointments: Appointment[]) =>{
        this.appointmentList = appointments;
    });
  }

  toHome(){
    this.router.navigate([""]);  
  }

  toAddDoctor(){
    this.router.navigate(["/admin/addDoctor"]);
  }

  toDoctorList(){ 
    this.router.navigate(["/admin/doctorList"]);
  }

  toAppointmentList(){ 
    this.router.navigate(["/admin/appointmentList"]);
  }
}

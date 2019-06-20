import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})


export class MakeAppointmentComponent implements OnInit {
  
  
  patient: Patient;
  appointmentList: Appointment[]

  constructor(private router: Router,
    private service: DoctorService) { }

  ngOnInit() {
    this.patient = this.service.currentUser;
    this.service.getFreshAppointments().subscribe(
      (appointments: any) =>{
        this.appointmentList = appointments;
      }
    );
  }

  applyAppointment(appointment: Appointment){
    console.log(this.patient);
    console.log(appointment);

    appointment.patient = this.patient;

    this.service.applyAppointment(appointment).subscribe();
    
  }

  toHome(){
    this.router.navigate([""]);  
  }

  toProfile(){
    this.router.navigate(["/patient/profile"]);
  }

  toAppointment(){ 
    this.router.navigate(["/patient/appointment"]);
  }

  toHistory(){ 
    this.router.navigate(["/patient/history"]);
  }
}

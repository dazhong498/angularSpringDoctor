import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { Patient } from 'src/app/models/patient.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-book-history',
  templateUrl: './book-history.component.html',
  styleUrls: ['./book-history.component.css']
})
export class BookHistoryComponent implements OnInit {

  appointmentList: Appointment[];
  patient: Patient;

  constructor(private router: Router,
    private service: DoctorService) { }

  ngOnInit() {
    this.patient = this.service.currentUser;

    this.service.getAppointmentHistory(this.patient).subscribe(
      (appointments: any) => {
        this.appointmentList = appointments;
        console.log(this.appointmentList);
        
      }
    );
    
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

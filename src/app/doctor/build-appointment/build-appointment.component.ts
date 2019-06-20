import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-build-appointment',
  templateUrl: './build-appointment.component.html',
  styleUrls: ['./build-appointment.component.css']
})
export class BuildAppointmentComponent implements OnInit {

  reactAppointmentForm: FormGroup;
  appointment: Appointment;

  // reactiveForm: FormGroup = new FormGroup({
  //   reactiveRadio: new FormControl(true)
  // })

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private service: DoctorService) { }

  ngOnInit() {
    // this.reactiveForm = this.formBuilder.group({
    //   date: [''],
    //   time: ['']
    // })
    this.reactAppointmentForm = this.formBuilder.group({
      date: [''],
      period: ['', Validators.required],
      doctor: [this.service.currentUser]
    });
  }

  buildAppointment(){
    if(this.reactAppointmentForm.valid){
      this.appointment = this.reactAppointmentForm.value;
      this.service.buildAppointment(this.appointment).subscribe(
        (appointment) =>{
          this.toViewAppointment();
        }
      );
    }
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

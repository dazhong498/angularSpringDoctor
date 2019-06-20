import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor.model';
import { Leave } from 'src/app/models/leave.model';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  reactLeaveForm: FormGroup;
  doctor: Doctor;
  leave: Leave;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private service: DoctorService) { }

  ngOnInit() {
    this.reactLeaveForm = this.formBuilder.group({
        date: [''],
        reason: [''],
        doctor: [this.service.currentUser]
      });
  }


  applyLeave(){
    if(this.reactLeaveForm.valid){

      this.leave = this.reactLeaveForm.value;

      this.service.applyLeave(this.leave).subscribe(
        (leave) =>{
          console.log("ater")
          console.log(leave);
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

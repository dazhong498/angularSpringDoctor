import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  reactProfileForm: FormGroup;
  doctor: Doctor;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private service: DoctorService) { }

  ngOnInit() {
    this.reactProfileForm = this.formBuilder.group({
      address: [''],
      email: ['']
    });
    this.doctor = this.service.currentUser;
  }

  editProfile(){
    if(this.reactProfileForm.valid){
      this.doctor.address = this.reactProfileForm.value.address;
      this.doctor.email = this.reactProfileForm.value.email;

      this.service.doctorEditProfile(this.doctor)
      .subscribe(
        (doctor) => {
          this.doctor = doctor;
          this.router.navigate(["/doctor/applyLeave"])
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

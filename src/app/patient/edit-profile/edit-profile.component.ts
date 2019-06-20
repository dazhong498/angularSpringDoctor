import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  reactProfileForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private service: DoctorService) { }

  ngOnInit() {
    this.reactProfileForm = this.formBuilder.group({
      email: ['']
    });
    console.log(this.service.currentUser);
  }

  editProfile(){
    // console.log(this.reactProfileForm.value.address + " " + this.reactProfileForm.value.email);
    // console.log(this.reactProfileForm.value.email);
    this.service.patientEditProfile(this.reactProfileForm.value.email)
    .subscribe(
      (value) => {
        console.log(value);
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

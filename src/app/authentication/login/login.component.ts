import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';
import { Patient } from 'src/app/models/patient.model';
import { Doctor } from 'src/app/models/doctor.model';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactLoginForm: FormGroup;
  reactSignUpForm: FormGroup;
  accountType: string;
  patient: Patient;
  currentUser: Patient | Doctor | Admin;
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private service: DoctorService) { }

  ngOnInit() {
    this.reactLoginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      accountType: ['', [Validators.required]]
    })

    this.reactSignUpForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(50)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    })
  }

  toHome(){
    this.router.navigate([""]);  
  }

  login(){
    if(this.reactLoginForm.valid){
      this.service.login(this.reactLoginForm.value.userName, this.reactLoginForm.value.password, this.reactLoginForm.value.accountType)
    }
  }

  signUp() {

    if(this.reactSignUpForm.valid){
      this.patient = this.reactSignUpForm.value;

      this.service.signUp(this.patient).subscribe(
        (patient) => {
          this.currentUser = patient;
          this.router.navigate([""]);
        }
      );
      // this.service.signUp(this.reactSignUpForm.value.userName, this.reactSignUpForm.value.password).subscribe(

      // );
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {


  reactDoctorForm: FormGroup;

  constructor(private router: Router,
    private service: DoctorService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reactDoctorForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      address: [''],
      email: [''],
    })
  }

  
  
  addDoctor(){
    if(this.reactDoctorForm.valid){
      this.service.addDoctor(this.reactDoctorForm.value).subscribe(
        () => {
          this.toDoctorList();
      });
    }
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

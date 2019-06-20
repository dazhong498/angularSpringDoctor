import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctorList: Doctor[];

  constructor(private router: Router,
    private service: DoctorService) { }

  ngOnInit() {
    this.service.getDoctors().subscribe(
      (doctors: Doctor[]) => {
        this.doctorList = doctors; 
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteDoctor(doctor: Doctor){
    this.service.removeDoctor(doctor).subscribe(
      () =>{
        this.toDoctorList();
      }
    )
    
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

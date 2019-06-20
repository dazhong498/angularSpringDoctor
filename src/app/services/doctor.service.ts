import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { Admin } from '../models/admin.model';
import { Leave } from '../models/leave.model';
import { Appointment } from '../models/appointment.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  currentUser: any;
  accountType: string;
  isLogin: boolean;
  

  constructor(private httpClient: HttpClient, private router: Router) { }

  signUp(patient: Patient): any{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/signUpPatient";
    return this.httpClient.post(url, JSON.stringify(patient), {headers: httpHeaders});
  }

  login(userName: string, password: string, accountType: string): any{
    let url = "";
    if(accountType === 'admin'){
      url = "http://localhost:8080/loginAdmin";
    }else if(accountType === 'doctor'){
      url = "http://localhost:8080/loginDoctor";
    }else if(accountType === "patient"){
      url = "http://localhost:8080/loginPatient";
    }

    let params = new HttpParams()
    .set('userName', userName)
    .set('password', password);
    this.httpClient.post(url, params).subscribe(
      (user) => {
        this.currentUser = user;
        if(this.currentUser != null){
          this.accountType = accountType;
          this.router.navigate([""]);
          this.isLogin = true;
          alert("Logined");
        }
        alert("Invalid Account")
        
      }
    );
  }

  logout(){
    this.isLogin = false;
  }



  patientEditProfile(email: string){
    this.currentUser.email = email;
    // console.log(this.currentUser);
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 

    let url = "http://localhost:8080/editProfilePatient";
    return this.httpClient.post(url, JSON.stringify(this.currentUser), {headers: httpHeaders})
  }

  doctorEditProfile(doctor: Doctor): any{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/editProfileDoctor";
    return this.httpClient.post(url, JSON.stringify(doctor), {headers: httpHeaders})
  }

  applyLeave(leave: Leave){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/applyLeave";
    return this.httpClient.post(url, JSON.stringify(leave), {headers: httpHeaders})
  }

  buildAppointment(appointment: Appointment){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/buildAppointment";
    return this.httpClient.post(url, JSON.stringify(appointment), {headers: httpHeaders})
  }

  getDoctorAppointments(doctor: Doctor){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/getDoctorAppointment";
    return this.httpClient.post(url, JSON.stringify(doctor), {headers: httpHeaders})
  }

  getFreshAppointments(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/getFreshAppointments";
    return this.httpClient.post(url, JSON.stringify({}), {headers: httpHeaders})
  }

  applyAppointment(appointment: Appointment){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/applyAppointment";
    return this.httpClient.post(url, JSON.stringify(appointment), {headers: httpHeaders})
  }

  getAppointmentHistory(patient: Patient){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/getPatientAppointment";
    return this.httpClient.post(url, JSON.stringify(patient), {headers: httpHeaders})
  }

  getAllAppointments(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/getAllAppointments";
    return this.httpClient.post(url, JSON.stringify({}), {headers: httpHeaders})
  }

  addDoctor(doctor: Doctor){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/addDoctor";
    return this.httpClient.post(url, JSON.stringify(doctor), {headers: httpHeaders});
  }

  getDoctors(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/getAllDoctors";
    return this.httpClient.post(url, JSON.stringify({}), {headers: httpHeaders})
  }

  removeDoctor(doctor: Doctor){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }); 
    let url = "http://localhost:8080/removeDoctor";
    return this.httpClient.post(url, JSON.stringify(doctor), {headers: httpHeaders})
  }
}

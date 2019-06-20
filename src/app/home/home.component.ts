import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentAccountType: string;
  isPatient: boolean;
  isDoctor: boolean;
  isAdmin: boolean;
  isLogin: boolean;
  backgroundImage: SafeStyle;

  constructor(private router: Router, 
    private service: DoctorService,
    private sanitizer: DomSanitizer) {
    }

  ngOnInit() {
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url(http://www.freephotos.se/images/photos_medium/white-flower-4.jpg)');
    this.currentAccountType = this.service.accountType;
    this.clean();
    this.isLogin = this.service.isLogin;
    if(this.service.accountType === "patient"){
      this.isPatient = true;
    }else if(this.service.accountType === "doctor"){
      this.isDoctor = true;
    }else if(this.service.accountType === "admin"){
      this.isAdmin = true;
    }
  }

  toHome(){
    this.router.navigate([""]);  
  }

  clean(){
    this.isAdmin = false;
    this.isDoctor = false;
    this.isPatient = false;
  }

  toPatient(){
    this.router.navigate(["/patient/profile"]);
  }

  toAdmin(){
    this.router.navigate(["/admin/addDoctor"]);
  }

  toDoctor(){
    this.router.navigate(["/doctor/applyLeave"]);
  }

  toLogin(){
    this.router.navigate(["/auth/login"]);
  }

  toLogout(){
    console.log("logout");
    
    this.service.isLogin = false;
    this.service.currentUser = null;
    location.reload();
  }
}

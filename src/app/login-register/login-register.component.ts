import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  userData = {
    email: '',
    password: ''
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  LoginProcess(){
    // alert("OK")
    if(this.userData.email == "admin@gmail.com" && this.userData.password=="123456"){
      // ส่งไปหน้า dashboard
      this.router.navigate(['dashboard'])
    }else{
      // แจ้งเตือนว่าข้อมูลเข้าระบบไม่ถูกต้อง
      alert("ข้อมูลเข้าระบบไม่ถูกต้อง ลองใหม่")
    }
  }

}

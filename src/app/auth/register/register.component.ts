import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;
  badpass = false;
  CIvalid = false;

  constructor(public route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  Register(form: NgForm) {
    if (form.value.secondLastname === form.value.password) {
      console.log('BIEN PASS')
      form.value.secondLastname = "";
      this.badpass = false;
      var CI = form.value.CI
      if (CI.toString().length == 11) {
        console.log('BIEN CI')
        form.value.active = true;
        this.authService.register(form.value)
        .subscribe(res => {
          this.error = null;
          console.log('si')
          sessionStorage.setItem("x-access-token", res['token']);
          this.route.navigate(['/home']);
        },
        err => {
          console.log('no')
          console.log(err)
          this.error = err['error']['message'];
        })
      }else{
        this.CIvalid = true;
      }
    } else {
      this.badpass = true;


    }

  }
}

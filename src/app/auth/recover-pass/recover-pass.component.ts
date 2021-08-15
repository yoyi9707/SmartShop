import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent implements OnInit {

  error: string;
  badpass = false;
  codeValid = false;
  InvCode = false;

  constructor(
    public route: Router,
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.check();
  }

  check() {
    if (this.authService.usernameRecovery == null) {
      this.route.navigate(['/auth']);
    }
  }

  verify(code: HTMLInputElement) {
    console.log(code.value)
    if (code.value == this.authService.code) {
      console.log('Match')
      this.codeValid = true;
    } else {
      this.InvCode = true;
    }
  }

  NewPass(form: NgForm) {
    if (form.value.secondLastname === form.value.password) {
      this.badpass = false;

      const pass = form.value.password;
      console.log(pass + ' <--password');
      const user = this.authService.usernameRecovery
      console.log(user + ' <--user')

      this.userService.updateUserByUsername(user, pass)
        .subscribe(res => {
          this.error = null;
          this.userService.selectedUser = new User();
          this.route.navigate(['/auth']);
        },
          err => {
            this.error = err['error']['message'];
          })
    } else {
      this.badpass = true;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  cargando = false;

  constructor(public authService: AuthService, public route: Router) { }

  ngOnInit(): void {
  }


  Login(form: NgForm) {
    this.authService.login(form.value)
      .subscribe(res => {
        this.error = null;
        // localStorage
        sessionStorage.setItem("x-access-token", res['token']);
        this.route.navigate(['/home']);
      },
        err => {
          this.error = err['error']['message'];
        })
  }

  recoverPass(username: HTMLInputElement) {
    if (username.value != null) {
      this.cargando = true;

      this.authService.recoverPass(username.value)
        .subscribe(res => {
          this.authService.code = res['code'];
          this.authService.usernameRecovery = username.value;
          this.route.navigate(['/recover']);
        },
          err => {
            this.cargando = false;
            this.error = 'Se ha producido un error. Inténtelo más tarde o póngase en contacto con los desarrolladores.'
            console.log(err)
            console.log('NO DEBES TENER INTERNET!!')
            return false;
          })
    }else{
      this.error = 'Debe escribir su nombre de usuario para recuperar su contraseña.'
    }
  }

}

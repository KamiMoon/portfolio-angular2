import { AuthService } from './../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email: String;
  password: String;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    if (form.valid) {
      //this.authService.login()
      this.authService.login(this.email, this.password).then(response => {

        this.authService.getUser().then(user => {
          console.log(user);
        });
      })
        .catch(err => {
          console.error(err);
        });


      //subscribe calls it again!!!!!!!
      //get rid of it!!!
    }

  }
}

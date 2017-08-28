import { AuthService } from './../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from './../../core/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) {

    console.log(form);
    // TODO - recaptacha
    if (form.valid) {
      //this.authService.
      this.authService.createUser(this.user).then(createdUser => {

        // TODO change route and display validation
      });

    }

  }

}

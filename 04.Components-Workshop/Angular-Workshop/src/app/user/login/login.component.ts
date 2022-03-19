import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }
}

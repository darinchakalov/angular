import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild(NgForm) form: NgForm | undefined;

  email = '';

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    if (this.form?.invalid) {
      return;
    }
    this.userService.register(this.form!.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

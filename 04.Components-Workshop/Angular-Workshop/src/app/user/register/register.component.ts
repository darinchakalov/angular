import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild(NgForm) form: NgForm | undefined;

  email = '';

  constructor(private userService: UserService) {}

  register(): void {
    if (this.form?.invalid) {
      return;
    }
    this.userService.register(this.form!.value).subscribe({
      next: () => {
        console.log('ok');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

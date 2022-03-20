import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild(NgForm) form: NgForm | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  login(): void {
    if (this.form?.invalid) {
      return;
    }
    this.userService.login(this.form?.value).subscribe({
      next: () => {
        const redirectUrl =
          this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
        this.router.navigate([redirectUrl]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

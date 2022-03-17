import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SameValueDirective } from './same-value.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SameValueDirective, ReactiveFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class MyFormsModule {}

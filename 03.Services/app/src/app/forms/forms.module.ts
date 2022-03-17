import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SameValueDirective } from './same-value.directive';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SameValueDirective],
  imports: [CommonModule, FormsModule],
})
export class MyFormsModule {}

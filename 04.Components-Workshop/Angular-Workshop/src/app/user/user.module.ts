import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { EmailValidatorsDirective } from '../shared/validators/email-validators.directive';
import { PassMatchValidatorDirective } from '../shared/validators/pass-match-validator.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EmailValidatorsDirective,
    PassMatchValidatorDirective,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}

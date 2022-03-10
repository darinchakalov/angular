import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LocalStorage } from './injection-tokens';
import { AuthActivate } from './guards/auth.activate';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  //Creating this exports so they can be used in the app module
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: LocalStorage,
      useValue: window.localStorage,
    },
    AuthActivate,
  ],
})
export class CoreModule {}

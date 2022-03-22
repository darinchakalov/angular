import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ParamsActivate } from './guards/params.activate';
import { AppInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  providers: [ParamsActivate, AppInterceptorProvider],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}

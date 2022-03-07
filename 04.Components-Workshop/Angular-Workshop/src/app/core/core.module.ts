import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AsideComponent],
  imports: [CommonModule, HttpClientModule],
  //Creating this exports so they can be used in the app module
  exports: [HeaderComponent, FooterComponent, AsideComponent],
})
export class CoreModule {}

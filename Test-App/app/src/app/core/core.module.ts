import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HeaderComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}

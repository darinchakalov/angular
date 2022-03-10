import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './product/main/main.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, CoreModule, HttpClientModule, AppRoutingModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';
import { ThemesModule } from './theme/theme.module';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    ThemesModule,
    AppRoutingModule,
  ],
  providers: [ContentService],
  bootstrap: [AppComponent],
})
export class AppModule {}

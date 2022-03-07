import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserListItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [{ provide: UserService, useClass: UserService }],
  bootstrap: [AppComponent],
})
export class AppModule {}

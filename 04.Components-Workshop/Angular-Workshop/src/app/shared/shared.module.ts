import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimeDiffPipe } from './pipes/time-diff.pipe';
import { ChangeDatePipe } from './pipes/change-date.pipe';

@NgModule({
  declarations: [HomeComponent, ShortenPipe, TimeDiffPipe, ChangeDatePipe],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, ShortenPipe, TimeDiffPipe, ChangeDatePipe],
})
export class SharedModule {}

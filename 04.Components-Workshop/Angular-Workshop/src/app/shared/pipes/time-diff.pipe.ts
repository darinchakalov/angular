import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff',
})
export class TimeDiffPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: string): string {
    const valueDate = new Date(value);
    const currentDate = new Date();

    let diff = +currentDate - +valueDate;
    let days = Math.floor(diff / (60 * 60 * 24 * 1000));
    let hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    let minutes =
      Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    let seconds =
      Math.floor(diff / 1000) -
      (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);
    let months = Math.floor(days / 30);
    let years = Math.floor(days / 365);
    if (years >= 1) {
      return `${years} years ago`;
    } else if (months >= 1) {
      return `${months} months ago`;
    } else if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  }
}

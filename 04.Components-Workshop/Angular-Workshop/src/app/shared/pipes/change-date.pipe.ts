import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDate',
})
export class ChangeDatePipe implements PipeTransform {
  transform(value: string): string {
    let currentDate = new Date(value);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay()

    return `${day+1}.${month+1}.${year}`
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getProp',
})
export class GetPropPipe implements PipeTransform {
  transform(
    value: Record<string | number, any> | any[],
    propName: string | number
  ): any {
    if (
      value === null ||
      typeof value !== 'object' ||
      (Array.isArray(value) && typeof propName !== 'number')
    ) {
    }
    return value[propName as any];
  }
}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customNumber',
  standalone: true
})
export class CustomNumberPipe implements PipeTransform {
  transform(value: string | number): string {
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      return value.toString();
    }
    return new Intl.NumberFormat().format(numberValue);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  appendNumber(currentValue: string, value: string): string {
    if (currentValue === '0') {
      return value;
    } else {
      return currentValue + value;
    }
  }

  appendOperation(currentValue: string, operation: string): string {
    return currentValue + ' ' + operation + ' ';
  }

  calculate(currentValue: string): string {
    try {
      return eval(currentValue).toString();
    } catch (error) {
      return 'Error';
    }
  }

  deleteLast(currentValue: string): string {
    if (currentValue.length > 1) {
      return currentValue.slice(0, -1);
    } else {
      return '0';
    }
  }
}

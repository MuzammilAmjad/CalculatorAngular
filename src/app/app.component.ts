import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {CalculatorService} from './app.component.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule],
  providers: [CalculatorService]
})
export class AppComponent {
  title = 'Calculator';
  display = new FormControl('0');
  currentValue = '0';

  constructor(private calculatorService: CalculatorService) {}

  onNumberClick(value: string) {
    this.currentValue = this.calculatorService.appendNumber(this.currentValue, value);
    this.display.setValue(this.currentValue);
  }

  onOperationClick(operation: string) {
    this.currentValue = this.calculatorService.appendOperation(this.currentValue, operation);
    this.display.setValue(this.currentValue);
  }

  onEqualsClick() {
    this.currentValue = this.calculatorService.calculate(this.currentValue);
    this.display.setValue(this.currentValue);
  }

  onResetClick() {
    this.currentValue = '0';
    this.display.setValue(this.currentValue);
  }

  onDeleteClick() {
    this.currentValue = this.calculatorService.deleteLast(this.currentValue);
    this.display.setValue(this.currentValue);
  }
}

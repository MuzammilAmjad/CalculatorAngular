import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {CalculatorService} from './calculator/calculator.service';
import {CustomNumberPipe} from './calculator/calculator.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule,CustomNumberPipe],
  providers: [CalculatorService]
})
export class AppComponent {
  title = 'Calculator';
}

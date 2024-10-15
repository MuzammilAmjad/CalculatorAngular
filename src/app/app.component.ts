import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule],

})
export class AppComponent {
  title = 'Calculator';
  display = new FormControl('0');
  currentValue = '0';

  onNumberClick(value: string) {}

  onOperationClick(operation: string) {}

  onEqualsClick() {}

  onResetClick() {}

  onDeleteClick() {}
}

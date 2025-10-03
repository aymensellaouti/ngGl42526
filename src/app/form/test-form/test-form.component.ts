import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],
  imports: [FormsModule],
})
export class TestFormComponent {
  process(form: NgForm) {
    console.log(form);
  }
}

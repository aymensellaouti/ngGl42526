import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Cv } from '../model/cv';
import { NgIf, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
})
export class AddCvComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    path: [''],
    job: ['', Validators.required],
    cin: [
      '',
      {
        validators: [Validators.required, Validators.pattern('[0-9]{8}')],
      },
    ],
    age: [
      0,
      {
        validators: [Validators.required],
        updateOn: 'blur',
      },
    ],
  });
  constructor() {
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age < 18) {
          this.path?.reset();
          this.path?.disable();
        } else this.path?.enable();
      },
    });
  }
  addCv() {
    console.log({ value: this.form.value });
    console.log({ getRawValue: this.form.getRawValue() });
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}

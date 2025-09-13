import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validations',
  imports: [CommonModule],
  templateUrl: './form-validations.html',
  styleUrls: ['./form-validations.scss'],
})
export class FormValidations {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}

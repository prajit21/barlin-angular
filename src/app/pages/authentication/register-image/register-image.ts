import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../widgets/common-register-form/common-register-form';

@Component({
  selector: 'app-register-image',
  imports: [CommonRegisterForm, RouterModule],
  templateUrl: './register-image.html',
  styleUrl: './register-image.scss',
})
export class RegisterImage {}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../widgets/common-register-form/common-register-form';

@Component({
  selector: 'app-register-two',
  imports: [CommonRegisterForm, RouterModule],
  templateUrl: './register-two.html',
  styleUrl: './register-two.scss',
})
export class RegisterTwo {}

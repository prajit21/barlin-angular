import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-success-message',
  imports: [],
  templateUrl: './success-message.html',
  styleUrls: ['./success-message.scss'],
})
export class SuccessMessage {
  successAlert() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonColor: 'var(--theme-default)',
    });
  }
}

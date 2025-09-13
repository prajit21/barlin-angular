import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-title-with-text',
  imports: [],
  templateUrl: './title-with-text.html',
  styleUrls: ['./title-with-text.scss'],
})
export class TitleWithText {
  openAlert() {
    Swal.fire({
      title: "It's Magic!",
      text: 'Thank you for visiting Berlin theme',
      confirmButtonColor: 'var(--theme-default)',
    });
  }
}

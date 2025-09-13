import { Component } from '@angular/core';

import { FileUpload } from './file-upload/file-upload';

@Component({
  selector: 'app-create-new',
  imports: [FileUpload],
  templateUrl: './create-new.html',
  styleUrls: ['./create-new.scss'],
})
export class CreateNew {}

import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-file-upload',
  imports: [DropzoneModule],
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss'],
})
export class FileUpload {
  public text =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="dz-message needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  public config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}

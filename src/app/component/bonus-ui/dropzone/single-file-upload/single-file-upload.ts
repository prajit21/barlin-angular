import { Component } from "@angular/core";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-single-file-upload",
  imports: [DropzoneModule],
  templateUrl: "./single-file-upload.html",
  styleUrls: ["./single-file-upload.scss"],
})
export class SingleFileUpload {
  public imageConfig: DropzoneConfigInterface = {
    url: "https://httpbin.org/post",
    clickable: true,
    uploadMultiple: false,
    addRemoveLinks: true,
    maxFiles: 1,
  };
  public text =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}

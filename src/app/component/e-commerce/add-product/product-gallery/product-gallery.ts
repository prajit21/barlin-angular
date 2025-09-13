import { Component, output } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import Swal from 'sweetalert2';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';

@Component({
  selector: 'app-product-gallery',
  imports: [DropzoneModule, CommonSvgIcons],
  templateUrl: './product-gallery.html',
  styleUrls: ['./product-gallery.scss'],
})
export class ProductGallery {
  readonly activeSteps = output<number>();
  public activeStep: number = 2;

  public image =
    'Drag your image here, or <a class="txt-primary" href="#!">browser</a></h5><span class="note needsclick">SVG,PNG,JPG or GIF</span>';
  public gallery =
    'Drag files here</h5><span class="note needsclick">Add Product Gallery Images</span>';

  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
    maxFiles: 1,
  };

  public galleryConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
    uploadMultiple: true,
  };

  onUploadSuccess(_args: DropzoneConfigInterface): void {}

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccessGallery(_args: DropzoneConfigInterface): void {}

  onUploadErrorGallery(_args: DropzoneConfigInterface): void {}

  next() {
    if (this.image.length === 0) {
      Swal.fire({
        title: 'Please upload product image',
        confirmButtonColor: 'var(--theme-default)',
      });
    } else if (this.gallery.length === 0) {
      Swal.fire({
        title: 'Please upload product gallery',
        confirmButtonColor: 'var(--theme-default)',
      });
    } else {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}

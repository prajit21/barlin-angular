import { Component } from '@angular/core';

import { imagesWithCheckbox } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-images-with-checkbox',
  imports: [],
  templateUrl: './images-with-checkbox.html',
  styleUrls: ['./images-with-checkbox.scss'],
})
export class ImagesWithCheckbox {
  public imagesWithCheckbox = imagesWithCheckbox;
}

import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-images-sizes',
  imports: [],
  templateUrl: './images-sizes.html',
  styleUrls: ['./images-sizes.scss'],
})
export class ImagesSizes {
  public imageSizeData = data.imageSizeData;
  public imageSizeDataRounded = data.imageSizeDataRounded;
}

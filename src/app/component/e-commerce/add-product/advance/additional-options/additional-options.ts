import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { TagInputModule } from 'ngx-chips';

import { CommonSvgIcons } from '../../../../../shared/component/common-svg-icons/common-svg-icons';

@Component({
  selector: 'app-additional-options',
  imports: [CommonSvgIcons, TagInputModule, FormsModule, AngularEditorModule],
  templateUrl: './additional-options.html',
  styleUrls: ['./additional-options.scss'],
})
export class AdditionalOptions {
  public htmlContent = '';
  public items = [];
}

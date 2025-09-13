import { Component } from '@angular/core';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import { files, folders, quickAccess } from '../../../shared/data/data/file-maganer';

@Component({
  selector: 'app-file-content',
  imports: [FeatherIcon],
  templateUrl: './file-content.html',
  styleUrl: './file-content.scss',
})
export class FileContent {
  public quickAccess = quickAccess;
  public folders = folders;
  public files = files;
}

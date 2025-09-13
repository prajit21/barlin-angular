import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-angular-editors',
  imports: [AngularEditorModule, FormsModule],
  templateUrl: './angular-editors.html',
  styleUrls: ['./angular-editors.scss'],
})
export class MdeEditors {
  public htmlContent = '';
}

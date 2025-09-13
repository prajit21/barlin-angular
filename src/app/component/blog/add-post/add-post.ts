import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-add-post',
  imports: [RouterModule, NgSelectModule, NgxEditorModule, FormsModule, DropzoneModule],
  templateUrl: './add-post.html',
  styleUrls: ['./add-post.scss'],
})
export class AddPost {
  public files: File[] = [];
  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];
  public text =
    '<i class="icon-cloud-up"></i><h6 class="f-w-700 mb-0">Drag & Drop your files or Browse</h6>';
  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };
  public cities2 = [
    { id: 1, name: 'LifeStyle' },
    { id: 2, name: 'Travel' },
  ];
  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

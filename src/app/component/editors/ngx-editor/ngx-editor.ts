import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Editor, NgxEditorModule } from "ngx-editor";

@Component({
  selector: "app-ngx-editor",
  imports: [NgxEditorModule, FormsModule],
  templateUrl: "./ngx-editor.html",
  styleUrl: "./ngx-editor.scss",
})
export class NgxEditor {
  public editor: Editor;
  public html = "";

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

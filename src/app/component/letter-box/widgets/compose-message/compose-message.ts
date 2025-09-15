import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Editor, NgxEditorModule } from "ngx-editor";

@Component({
  selector: "app-compose-message",
  imports: [NgxEditorModule, FormsModule],
  templateUrl: "./compose-message.html",
  styleUrl: "./compose-message.scss",
})
export class ComposeMessage {
  public isCc: boolean = false;
  public isBcc: boolean = false;
  public editor: Editor;
  public html = "";

  public modalService = inject(NgbModal);

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

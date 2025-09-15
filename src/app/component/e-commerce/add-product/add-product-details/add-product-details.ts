import { CommonModule } from "@angular/common";
import { Component, output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { Editor, NgxEditorModule } from "ngx-editor";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";

@Component({
  selector: "app-add-product-details",
  imports: [
    NgxEditorModule,
    ReactiveFormsModule,
    CommonSvgIcons,
    CommonModule,
    FormsModule,
  ],
  templateUrl: "./add-product-details.html",
  styleUrls: ["./add-product-details.scss"],
})
export class AddProductDetails {
  public activeStep: number = 1;
  public validate: boolean = false;
  public productForm: FormGroup;
  public editor: Editor;

  public html = "";
  readonly activeSteps = output<number>();

  constructor() {
    this.productForm = new FormGroup({
      productTitle: new FormControl("", Validators.required),
      text: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  next() {
    this.validate = true;
    if (this.productForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() {
    return this.productForm.get("product_Title");
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

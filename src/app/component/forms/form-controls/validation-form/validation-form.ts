import { Component } from "@angular/core";

import { BrowserDefaults } from "./browser-defaults/browser-defaults";
import { FormValidations } from "./form-validations/form-validations";
import { TooltipForm } from "./tooltip-form/tooltip-form";

@Component({
  selector: "app-validation-form",
  imports: [BrowserDefaults, FormValidations, TooltipForm],
  templateUrl: "./validation-form.html",
  styleUrls: ["./validation-form.scss"],
})
export class ValidationForm {}

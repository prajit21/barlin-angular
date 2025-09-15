import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Loader } from "./shared/component/loader/loader";
import { TapTop } from "./shared/component/tap-top/tap-top";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Loader, TapTop],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {}

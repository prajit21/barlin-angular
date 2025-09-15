import { Component, inject } from "@angular/core";

import {
  NgbTypeaheadConfig,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
import { debounceTime, distinctUntilChanged, map } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

import * as data from "../../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-global",
  imports: [NgbTypeaheadModule],
  templateUrl: "./global.html",
  styleUrls: ["./global.scss"],
})
export class Global {
  public config = inject(NgbTypeaheadConfig);

  public searchData = data.state;

  constructor() {
    // customize default values of typeaheads used by this component tree
    this.config.showHint = true;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.searchData
              .filter((v) =>
                v.toLowerCase().startsWith(term.toLocaleLowerCase()),
              )
              .splice(0, 10),
      ),
    );
}

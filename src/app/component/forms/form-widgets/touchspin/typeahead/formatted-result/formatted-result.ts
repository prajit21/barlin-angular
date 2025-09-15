import { Component } from "@angular/core";

import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import {
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
} from "rxjs";

import * as data from "../../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-formatted-result",
  imports: [NgbTypeaheadModule],
  templateUrl: "./formatted-result.html",
  styleUrls: ["./formatted-result.scss"],
})
export class FormattedResult {
  public searchData = data.state;

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term === ""
          ? []
          : this.searchData
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10),
      ),
    );
}

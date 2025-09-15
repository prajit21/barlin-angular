import { Component } from "@angular/core";

import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import {
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from "rxjs";

import * as data from "../../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-prevent-manual-entry",
  imports: [NgbTypeaheadModule],
  templateUrl: "./prevent-manual-entry.html",
  styleUrls: ["./prevent-manual-entry.scss"],
})
export class PreventManualEntry {
  public searchData = data.statesData;

  formatter = (state: data.statedDataInterface) => state.name;

  search: OperatorFunction<string, readonly { id: number; name: string }[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.searchData
          .filter((state) => new RegExp(term, "mi").test(state.name))
          .slice(0, 10),
      ),
    );
}

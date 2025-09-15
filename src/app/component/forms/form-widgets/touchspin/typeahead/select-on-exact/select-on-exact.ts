import { Component } from "@angular/core";

import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { OperatorFunction, Observable, debounceTime, map } from "rxjs";

import * as data from "../../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-select-on-exact",
  imports: [NgbTypeaheadModule],
  templateUrl: "./select-on-exact.html",
  styleUrls: ["./select-on-exact.scss"],
})
export class SelectOnExact {
  public searchData = data.statesData;

  search: OperatorFunction<string, readonly { name: string }[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ""
          ? []
          : this.searchData
              .filter(
                (v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1,
              )
              .slice(0, 10),
      ),
    );

  formatter = (x: { name: string }) => x.name;
}

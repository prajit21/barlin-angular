import { Component } from "@angular/core";

import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { OperatorFunction, Observable, debounceTime, map } from "rxjs";

import * as data from "../../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-template-for-results",
  imports: [NgbTypeaheadModule],
  templateUrl: "./template-for-results.html",
  styleUrls: ["./template-for-results.scss"],
})
export class TemplateForResults {
  public flagData = data.statesWithFlags;

  search: OperatorFunction<string, readonly { name: string; flag: string }[]> =
    (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        map((term) =>
          term === ""
            ? []
            : this.flagData
                .filter(
                  (v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1,
                )
                .slice(0, 10),
        ),
      );

  formatter = (x: { name: string }) => x.name;
}

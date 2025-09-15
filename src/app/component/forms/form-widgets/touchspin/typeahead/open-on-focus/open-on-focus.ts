import { Component, viewChild } from "@angular/core";

import { NgbTypeahead, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import {
  Subject,
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  merge,
  map,
} from "rxjs";

import * as data from "../../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-open-on-focus",
  imports: [NgbTypeaheadModule],
  templateUrl: "./open-on-focus.html",
  styleUrls: ["./open-on-focus.scss"],
})
export class OpenOnFocus {
  public states = data.state;

  readonly instance = viewChild<NgbTypeahead>("instance");
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>,
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
    );
    const clickWithClosedPopup$ = this.click$.pipe(
      filter(() => this.instance()!.isPopupOpen()),
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clickWithClosedPopup$).pipe(
      map((term) =>
        (term === ""
          ? this.states
          : this.states.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1,
            )
        ).slice(0, 10),
      ),
    );
  };
}

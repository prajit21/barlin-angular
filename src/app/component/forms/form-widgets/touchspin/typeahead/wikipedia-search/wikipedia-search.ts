import { HttpParams, HttpClient } from "@angular/common/http";
import { Component, Injectable, inject } from "@angular/core";

import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import {
  of,
  map,
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
} from "rxjs";

const WIKI_URL = "https://en.wikipedia.org/w/api.php";
const PARAMS = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*",
  },
});

@Injectable()
export class WikipediaService {
  private http = inject(HttpClient);

  search(term: string) {
    if (term === "") {
      return of([]);
    }

    return this.http
      .get<[string, string[]]>(WIKI_URL, { params: PARAMS.set("search", term) })
      .pipe(map((response) => response[1]));
  }
}

@Component({
  selector: "app-wikipedia-search",
  imports: [NgbTypeaheadModule],
  templateUrl: "./wikipedia-search.html",
  styleUrls: ["./wikipedia-search.scss"],
  providers: [WikipediaService],
})
export class WikipediaSearch {
  searching = false;
  searchFailed = false;

  private _service = inject(WikipediaService);

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this._service.search(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }),
        ),
      ),
      tap(() => (this.searching = false)),
    );
}

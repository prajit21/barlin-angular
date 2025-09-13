import { Component } from '@angular/core';

import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

import * as data from '../../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-simple-typeahead',
  imports: [NgbTypeaheadModule],
  templateUrl: './simple-typeahead.html',
  styleUrls: ['./simple-typeahead.scss'],
})
export class SimpleTypeahead {
  public states = data.state;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );
}

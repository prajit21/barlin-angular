import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-bookmarks',
  imports: [],
  templateUrl: './new-bookmarks.html',
  styleUrl: './new-bookmarks.scss',
})
export class NewBookmarks {
  public modal = inject(NgbModal);
}

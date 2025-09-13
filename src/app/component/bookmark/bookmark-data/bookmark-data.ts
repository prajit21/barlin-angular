import { Component, SimpleChanges, input, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import * as data from '../../../shared/data/data/bookmark';
import { EditBookmark } from '../widgets/edit-bookmark/edit-bookmark';

@Component({
  selector: 'app-bookmark-data',
  imports: [FeatherIcon],
  templateUrl: './bookmark-data.html',
  styleUrl: './bookmark-data.scss',
})
export class BookmarkData {
  readonly selectedId = input<number>();
  readonly data = input<data.bookMark[]>();
  public getBookmarkData: data.bookMark;
  public listGrid: boolean = false;

  private modal = inject(NgbModal);

  ngOnInit() {
    this.data()?.map(data => {
      if (data.active) {
        this.getBookmarkData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let getId = changes['selectedId']?.currentValue;
    this.data()?.map(data => {
      if (data.title_id == getId) {
        this.getBookmarkData = data;
      }
    });
  }

  bookMarkItem(item: data.bookmarkModel) {
    return (item.favourite = !item.favourite);
  }

  editBookmarkModel(details: data.bookmarkModel) {
    let editBookmark = this.modal.open(EditBookmark, { size: 'lg', windowClass: 'modal-bookmark' });
    editBookmark.componentInstance.bookmarkDetails = details;
  }
}

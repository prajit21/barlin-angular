import { Component, input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { bookmarkModel } from '../../../../shared/data/data/bookmark';

@Component({
  selector: 'app-edit-bookmark',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-bookmark.html',
  styleUrl: './edit-bookmark.scss',
})
export class EditBookmark {
  public bookmark: FormGroup;
  readonly bookmarkDetails = input<bookmarkModel>();

  public modal = inject(NgbModal);

  ngOnInit() {
    this.bookmark = new FormGroup({
      url: new FormControl(this.bookmarkDetails()?.url, Validators.required),
      title: new FormControl(this.bookmarkDetails()?.title, Validators.required),
      desc: new FormControl(this.bookmarkDetails()?.desc, Validators.required),
    });
  }

  submit(_value: FormGroup) {}
}

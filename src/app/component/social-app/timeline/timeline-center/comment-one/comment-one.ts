import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../../shared/component/feather-icon/feather-icon';
import * as data from '../../../../../shared/data/data/social-app';

@Component({
  selector: 'app-comment-one',
  imports: [FeatherIcon, CommonModule],
  templateUrl: './comment-one.html',
  styleUrl: './comment-one.scss',
})
export class CommentOne {
  public commentOneData = data.commentOneData;
}

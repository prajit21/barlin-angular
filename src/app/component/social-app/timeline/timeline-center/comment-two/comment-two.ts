import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../../shared/component/feather-icon/feather-icon';
import * as data from '../../../../../shared/data/data/social-app';

@Component({
  selector: 'app-comment-two',
  imports: [FeatherIcon],
  templateUrl: './comment-two.html',
  styleUrl: './comment-two.scss',
})
export class CommentTwo {
  public commentTwoData = data.commentTwoData;
}

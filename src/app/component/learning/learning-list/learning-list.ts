import { Component } from '@angular/core';

import { learningData, learningTopData } from '../../../shared/data/data/learning';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-learning-list',
  imports: [LearningFilter],
  templateUrl: './learning-list.html',
  styleUrls: ['./learning-list.scss'],
})
export class LearningList {
  public learningTopData = learningTopData;
  public learningData = learningData;
}

import { Component } from '@angular/core';

import { Comment } from '../comment/comment';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-detailed-course',
  imports: [Comment, LearningFilter],
  templateUrl: './detailed-course.html',
  styleUrls: ['./detailed-course.scss'],
})
export class DetailedCourse {}

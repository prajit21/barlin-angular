import { Component } from '@angular/core';

import { Categories } from './categories/categories';
import { FindCourse } from './find-course/find-course';
import { UpcomingCourses } from './upcoming-courses/upcoming-courses';

@Component({
  selector: 'app-learning-filter',
  imports: [FindCourse, Categories, UpcomingCourses],
  templateUrl: './learning-filter.html',
  styleUrls: ['./learning-filter.scss'],
})
export class LearningFilter {
  public isOpen: boolean = false;
}

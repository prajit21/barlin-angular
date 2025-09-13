import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-date-picker',
  imports: [FormsModule, NgbDatepickerModule, FeatherIcon],
  templateUrl: './date-picker.html',
  styleUrls: ['./date-picker.scss'],
})
export class DatePicker {
  private calendar = inject(NgbCalendar);
  public formatter = inject(NgbDateParserFormatter);

  public showWeekNumbers = false;
  public model: NgbDateStruct;
  public outsideDays = 'visible';
  public navigation = 'select';
  public displayMonths = 2;
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;
  public placement = 'top';
  public model2: NgbDateStruct;

  constructor() {
    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10);
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
}

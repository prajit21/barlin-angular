import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts-with-text-actions',
  imports: [CommonModule],
  templateUrl: './alerts-with-text-actions.html',
  styleUrls: ['./alerts-with-text-actions.scss'],
})
export class AlertsWithTextActions {
  public show: boolean = false;
  public alert: boolean = false;
}

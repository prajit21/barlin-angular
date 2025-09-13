import { Component } from '@angular/core';

import { DataTable } from './data-table/data-table';
import { SupportTicketList } from './support-ticket-list/support-ticket-list';
import { ticketListStatus } from '../../shared/data/data/support-tickit';

@Component({
  selector: 'app-support-tickit',
  imports: [DataTable, SupportTicketList],
  templateUrl: './support-tickit.html',
  styleUrls: ['./support-tickit.scss'],
})
export class SupportTickit {
  public ticketListStatus = ticketListStatus;
}

import { Component, input } from '@angular/core';

import { ticketListData } from '../../../shared/data/data/support-tickit';

@Component({
  selector: 'app-support-ticket-list',
  imports: [],
  templateUrl: './support-ticket-list.html',
  styleUrls: ['./support-ticket-list.scss'],
})
export class SupportTicketList {
  readonly data = input<ticketListData>();
}

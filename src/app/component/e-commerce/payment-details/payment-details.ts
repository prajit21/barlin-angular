import { Component } from '@angular/core';

import { Cod } from './cod/cod';
import { CreditCard } from './credit-card/credit-card';
import { DebitCard } from './debit-card/debit-card';
import { Emi } from './emi/emi';
import { NetBanking } from './net-banking/net-banking';

@Component({
  selector: 'app-payment-details',
  imports: [Cod, CreditCard, DebitCard, Emi, NetBanking],
  templateUrl: './payment-details.html',
  styleUrls: ['./payment-details.scss'],
})
export class PaymentDetails {}

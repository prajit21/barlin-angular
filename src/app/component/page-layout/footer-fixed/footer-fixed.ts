import { Component } from '@angular/core';

import { FooterLayout } from '../footer-layout/footer-layout';

@Component({
  selector: 'app-footer-fixed',
  imports: [FooterLayout],
  templateUrl: './footer-fixed.html',
  styleUrls: ['./footer-fixed.scss'],
})
export class FooterFixed {}

import { Component } from '@angular/core';

import { BasicCardChild } from './basic-card-child/basic-card-child';
import { DarkColorCard } from './dark-color-card/dark-color-card';
import { FlatCard } from './flat-card/flat-card';
import { IconInHeading } from './icon-in-heading/icon-in-heading';
import { InfoColorCards } from './info-color-cards/info-color-cards';
import { WithoutShadowCard } from './without-shadow-card/without-shadow-card';
import { commonInfoColorCardData } from '../../../shared/data/data/bonus-ui/basic-card';

@Component({
  selector: 'app-basic-card',
  imports: [
    BasicCardChild,
    DarkColorCard,
    FlatCard,
    IconInHeading,
    InfoColorCards,
    WithoutShadowCard,
  ],
  templateUrl: './basic-card.html',
  styleUrls: ['./basic-card.scss'],
})
export class BasicCard {
  public commonInfoColorCardData = commonInfoColorCardData;
}

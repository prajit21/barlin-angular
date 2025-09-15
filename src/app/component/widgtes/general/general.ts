import { Component } from "@angular/core";

import { OfflineSales } from "./offline-sales/offline-sales";
import { OnlineSales } from "./online-sales/online-sales";
import { OrderOverview } from "./order-overview/order-overview";
import { ProjectCreated } from "./project-created/project-created";
import { SocialMedia } from "./social-media/social-media";
import { TotalProfit } from "./total-profit/total-profit";
import { TransactionHistory } from "./transaction-history/transaction-history";
import { Visitors } from "./visitors/visitors";
import {
  facebook,
  instagram,
  twitter,
  youtube,
} from "../../../shared/data/data/widgets";
import { LearningSummary } from "../../dashboard/default/learning-summary/learning-summary";
import { SaleStatistic } from "../../dashboard/ecommerce/sale-statistic/sale-statistic";

@Component({
  selector: "app-general",
  imports: [
    OnlineSales,
    OfflineSales,
    TotalProfit,
    LearningSummary,
    Visitors,
    OrderOverview,
    TransactionHistory,
    ProjectCreated,
    SaleStatistic,
    SocialMedia,
  ],
  templateUrl: "./general.html",
  styleUrl: "./general.scss",
})
export class General {
  public facebook = facebook;
  public instagram = instagram;
  public twitter = twitter;
  public youtube = youtube;
  public chartHeight: string = "400px";
}

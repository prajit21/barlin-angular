import { Component } from "@angular/core";

import { AddProduct } from "./add-product/add-product";
import { AskFriends } from "./ask-friends/ask-friends";
import { CurrentActivity } from "./current-activity/current-activity";
import { GoalSummary } from "./goal-summary/goal-summary";
import { OfflineSales } from "./offline-sales/offline-sales";
import { OnlineSales } from "./online-sales/online-sales";
import { OrdersCountries } from "./orders-countries/orders-countries";
import { Response } from "./response/response";
import { SaleStatistic } from "./sale-statistic/sale-statistic";
import { SpecialDiscount } from "./special-discount/special-discount";
import { SupportMailbox } from "./support-mailbox/support-mailbox";
import { TopSellingProducts } from "./top-selling-products/top-selling-products";
import { TotalProfit } from "./total-profit/total-profit";

@Component({
  selector: "app-ecommerce",
  imports: [
    OnlineSales,
    OfflineSales,
    TotalProfit,
    Response,
    OrdersCountries,
    TopSellingProducts,
    SaleStatistic,
    GoalSummary,
    CurrentActivity,
    SupportMailbox,
    AddProduct,
    SpecialDiscount,
    AskFriends,
  ],
  templateUrl: "./ecommerce.html",
  styleUrl: "./ecommerce.scss",
})
export class Ecommerce {}

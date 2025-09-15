import { Component } from "@angular/core";

import { CurrentOrders } from "./current-orders/current-orders";
import { CustomerReview } from "./customer-review/customer-review";
import { DashboardNotifications } from "./dashboard-notifications/dashboard-notifications";
import { HigherRevenue } from "./higher-revenue/higher-revenue";
import { LearningSummary } from "./learning-summary/learning-summary";
import { RecentActivity } from "./recent-activity/recent-activity";
import { SalesByProduct } from "./sales-by-product/sales-by-product";
import { TasksList } from "./tasks-list/tasks-list";
import { TotalSales } from "./total-sales/total-sales";
import { TrendingNews } from "./trending-news/trending-news";
import { Welcome } from "./welcome/welcome";

@Component({
  selector: "app-default",
  imports: [
    Welcome,
    HigherRevenue,
    RecentActivity,
    TasksList,
    DashboardNotifications,
    TotalSales,
    LearningSummary,
    CurrentOrders,
    TrendingNews,
    CustomerReview,
    SalesByProduct,
  ],
  templateUrl: "./default.html",
  styleUrl: "./default.scss",
})
export class Default {}

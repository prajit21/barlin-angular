import { Component } from '@angular/core';

import { CryptoAnnotations } from './crypto-annotations/crypto-annotations';
import { CryptocurrencyPrices } from './cryptocurrency-prices/cryptocurrency-prices';
import { Finance } from './finance/finance';
import { LiveProducts } from './live-products/live-products';
import { MonthlyHistory } from './monthly-history/monthly-history';
import { MonthlySales } from './monthly-sales/monthly-sales';
import { OrderStatusProcesses } from './order-status-processes/order-status-processes';
import { SalesOverview } from './sales-overview/sales-overview';
import { StockMarket } from './stock-market/stock-market';
import { TopChart } from './top-chart/top-chart';
import { TurnOver } from './turn-over/turn-over';
import { Uses } from './uses/uses';
import { totalProduct, totalProject, totalSale } from '../../../shared/data/data/widgets';
import { ProjectCreated } from '../general/project-created/project-created';

@Component({
  selector: 'app-chart',
  imports: [
    TopChart,
    ProjectCreated,
    SalesOverview,
    MonthlySales,
    LiveProducts,
    TurnOver,
    CryptocurrencyPrices,
    CryptoAnnotations,
    StockMarket,
    Finance,
    OrderStatusProcesses,
    Uses,
    MonthlyHistory,
  ],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class Chart {
  public totalSale = totalSale;
  public totalProject = totalProject;
  public totalProduct = totalProduct;
}

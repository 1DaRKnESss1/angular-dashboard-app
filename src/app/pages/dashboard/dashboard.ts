import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// ШЛЯХИ ОНОВЛЕНО: прибрано .component
import { QuickActionsComponent } from '../../components/quick-actions/quick-actions';
import { MarketIntelligenceComponent } from '../../components/market-intelligence/market-intelligence';
import { WorkQueueComponent } from '../../components/work-queue/work-queue';
import { PortfolioGoalsComponent } from '../../components/portfolio-goals/portfolio-goals';
import { MyAccountsTableComponent } from '../../components/my-accounts-table/my-accounts-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, QuickActionsComponent, MarketIntelligenceComponent, WorkQueueComponent, PortfolioGoalsComponent, MyAccountsTableComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

}
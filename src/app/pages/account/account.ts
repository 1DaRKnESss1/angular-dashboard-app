import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';
import { AccountHeaderComponent } from '../../components/account-header/account-header';
import { NeedsAttentionComponent } from '../../components/needs-attention/needs-attention';
import { PerformanceMetricsComponent } from '../../components/performance-metrics/performance-metrics';
import { PoliciesComponent } from '../../components/policies/policies';
import { AccountStatusComponent } from '../../components/account-status/account-status';
import { ComplianceComponent } from '../../components/compliance/compliance';
import { AccountDetailsComponent } from '../../components/account-details/account-details';
import { CommunicationComponent } from '../../components/communication/communication';
import { PoliciesTableComponent } from '../../components/policies-table/policies-table';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    AccountHeaderComponent,
    NeedsAttentionComponent,
    PerformanceMetricsComponent,
    PoliciesComponent,
    AccountStatusComponent,
    ComplianceComponent,
    AccountDetailsComponent,
    CommunicationComponent,
    PoliciesTableComponent
  ],
  templateUrl: './account.html',
  styleUrls: ['./account.css']
})
export class AccountComponent { }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import policiesTableData from '../../data/policiesTableData.json';

interface Policy {
  id: number;
  line: string;
  lineId: string;
  icon: string;
  effDate: string;
  expDate: string;
  status: string;
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  rateChange: number | null;
  lossRatio: number | null;
}

@Component({
  selector: 'app-policies-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './policies-table.html',
  styleUrls: ['./policies-table.css']
})
export class PoliciesTableComponent {
  policiesTableData = policiesTableData;

  formatCurrency(value: number): string {
    if (value === 0) return '$0';
    if (!value) return 'N/A';
    return `$${value.toLocaleString('en-US')}`;
  }

  getLossRatioColorClass(value: number | null): string {
    if (value === null || value === undefined) return '';
    if (value > 75) return 'red';
    if (value > 50) return 'yellow';
    return 'green';
  }

  getIconClass(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      marine: 'bi-truck',
      liability: 'bi-shield-shaded',
      workers: 'bi-briefcase-fill',
      umbrella: 'bi-umbrella-fill'
    };
    return iconMap[iconName] || '';
  }
}
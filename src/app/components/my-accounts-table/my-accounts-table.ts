import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import myAccountsData from '../../data/myAccountsData.json';

interface MyAccount {
  accountName: string;
  accountType: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: string;
  appetite: string;
  status: string;
  triage: number;
  winnability: string;
}

@Component({
  selector: 'app-my-accounts-table',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './my-accounts-table.html',
  styleUrls: ['./my-accounts-table.css']
})
export class MyAccountsTableComponent {
  searchTerm: string = '';
  private allAccounts: MyAccount[] = myAccountsData;

  public getStatusClass(status: string): string {
    if (!status) {
      return '';
    }
    return status.toLowerCase().replace(/ /g, '-');
  }

  get filteredAccounts(): MyAccount[] {
    if (!this.searchTerm) {
      return this.allAccounts;
    }
    return this.allAccounts.filter(account =>
      account.accountName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  getLossRatioClass(ratio: string): string {
    const numericRatio = parseInt(ratio, 10);
    if (numericRatio <= 35) return 'green';
    if (numericRatio <= 65) return 'yellow';
    return 'red';
  }

  getWinnabilityDots(level: string): boolean[] {
    const levels: { [key: string]: number } = { "Very Strong": 5, "Strong": 4, "Medium": 3, "Weak": 2, "Very Weak": 1 };
    const filledCount = levels[level] || 0;
    return Array(5).fill(false).map((_, i) => i < filledCount);
  }
}
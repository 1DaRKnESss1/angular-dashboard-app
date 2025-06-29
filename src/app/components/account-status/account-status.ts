import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import statusData from '../../data/accountStatusData.json';

@Component({
  selector: 'app-account-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-status.html',
  styleUrls: ['./account-status.css']
})
export class AccountStatusComponent {
  statusData = statusData;

  isLineFullyComplete(index: number): boolean {
    const currentStep = this.statusData.steps[index];
    const nextStep = this.statusData.steps[index + 1];
    return currentStep?.status === 'complete' && nextStep?.status === 'complete';
  }
}
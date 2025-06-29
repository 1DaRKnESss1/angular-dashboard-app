import { Component } from '@angular/core';
import workQueueData from '../../data/workQueueData.json';
import { CommonModule } from '@angular/common';

interface WorkItem {
  originatorInitials: string;
  originatorName: string;
  avatarColor: string;
  clientName: string;
  clientLine: string;
  type: string;
  status: string;
  created: string;
}

@Component({
  selector: 'app-work-queue',
  standalone: true,
  templateUrl: './work-queue.html',
  styleUrls: ['./work-queue.css'],
  imports: [CommonModule]
})
export class WorkQueueComponent {
  activeTab = 'Assigned to me';

  tabs = [
    { name: 'Assigned to me', count: 12 },
    { name: 'Pending Review', count: 8 },
    { name: 'Referrals', count: 3 },
  ];

  workQueueData: WorkItem[] = workQueueData;

  get filteredData(): WorkItem[] {
    switch (this.activeTab) {
      case 'Pending Review':
        return this.workQueueData.filter(item => item.status === 'Pending Review');
      case 'Referrals':
        return this.workQueueData.filter(item => item.status === 'Referral');
      default:
        return this.workQueueData.filter(item => item.status !== 'Pending Review' && item.status !== 'Referral');
    }
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().split(' ').join('-');
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-navigations',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-navigations.html',
  styleUrls: ['./dashboard-navigations.css']
})
export class DashboardNavigationsComponent {
  // ОНОВЛЕНО: Прибираємо 'Dashboard' з цього масиву
  navItems = [
    { label: 'Accounts', icon: 'bi-briefcase', path: '/accounts' },
    { label: 'Brokers', icon: 'bi-people', path: '#' },
    { label: 'Submissions', icon: 'bi-file-text', path: '#' },
    { label: 'Organizations', icon: 'bi-building', path: '#' },
    { label: 'Goals & Rules', icon: 'bi-graph-up', path: '#' },
    { label: 'Admin', icon: 'bi-key', path: '#' },
  ];
}
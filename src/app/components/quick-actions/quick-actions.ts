import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import quickActionsData from '../../data/quickActionsData.json';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.html',
  styleUrls: ['./quick-actions.css']
})
export class QuickActionsComponent {
  quickActionsData = quickActionsData;
}
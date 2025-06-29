import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import headerData from '../../data/accountHeaderData.json';

@Component({
  selector: 'app-account-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-header.html',
  styleUrls: ['./account-header.css']
})
export class AccountHeaderComponent {
  headerData = headerData;
}
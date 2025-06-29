import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import detailsData from '../../data/accountDetailsData.json';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-details.html',
  styleUrls: ['./account-details.css']
})
export class AccountDetailsComponent {
  detailsData = detailsData;
  nav = detailsData.nav;
  winnability = detailsData.winnability;
  recommendations = detailsData.recommendations;
}
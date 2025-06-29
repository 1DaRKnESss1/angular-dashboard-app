import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import policiesData from '../../data/policiesData.json';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policies.html',
  styleUrls: ['./policies.css']
})
export class PoliciesComponent {
  policiesData = policiesData;

  getIconClass(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      FaShip: 'bi-truck',
      FaShieldAlt: 'bi-shield-shaded',
      FaHardHat: 'bi-person-rolodex', 
      FaHome: 'bi-house-door-fill',
      FaUmbrella: 'bi-umbrella-fill'
    };
    return iconMap[iconName] || '';
  }
}
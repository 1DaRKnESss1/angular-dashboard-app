import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import complianceData from '../../data/complianceData.json';

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './compliance.html',
  styleUrls: ['./compliance.css']
})

export class ComplianceComponent {
  complianceData = complianceData;
}
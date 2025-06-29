import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import marketIntelligenceData from '../../data/marketIntelligenceData.json';

@Component({
  selector: 'app-market-intelligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-intelligence.html',
  styleUrls: ['./market-intelligence.css']
})
export class MarketIntelligenceComponent {
  marketIntelligenceData = marketIntelligenceData;
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import metricsData from '../../data/performanceMetricsData.json';

interface MetricLink {
  text: string;
  url: string;
}

interface MetricItem {
  label: string;
  value: string;
}

interface Metric {
  type: string;
  title: string;
  value?: string;
  activeDots?: number;
  totalDots?: number;
  subtext?: string;
  subtext_line1?: string;
  subtext_line2?: string;
  items?: MetricItem[];
  link?: MetricLink;
}

@Component({
  selector: 'app-performance-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-metrics.html',
  styleUrls: ['./performance-metrics.css']
})
export class PerformanceMetricsComponent {
  metricsData: { title: string; metrics: Metric[] } = metricsData;

  getWinnabilityDots(active: number = 0, total: number = 5): boolean[] {
    return Array(total).fill(false).map((_, i) => i < active);
  }
}
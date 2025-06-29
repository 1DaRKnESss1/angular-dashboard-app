import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import portfolioGoalsData from '../../data/portfolioGoalsData.json';

interface GoalSegment {
  percentage: number;
  color: string;
}

interface PortfolioGoal {
  title: string;
  target?: string;
  segments?: GoalSegment[];
  targetIndicatorPosition?: number;
  currentValue: string;
  status?: string;
  statusColor?: string;
  progress?: number;
  targetValue?: string;
  color?: string;
}

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-goals.html',
  styleUrls: ['./portfolio-goals.css']
})
export class PortfolioGoalsComponent {
  portfolioGoalsData: PortfolioGoal[] = portfolioGoalsData;

  calculatePosition(goal: PortfolioGoal): number {
    if (goal.title === "PORTFOLIO LOSS RATIO TARGET") {
      return 45;
    } else {
      let offset = 0;
      const targetSegment = goal.segments?.find(s => s.color === '#28a745');
      if (!goal.segments || !targetSegment) {
        return 0;
      }
      for (const segment of goal.segments) {
        if (segment.color === '#28a745') break;
        offset += segment.percentage;
      }
      return offset + (targetSegment.percentage / 2);
    }
  }

  getValueIndicatorColor(goal: PortfolioGoal): string {
    if (goal.title === "PORTFOLIO LOSS RATIO TARGET") {
      return "#28a745";
    }
    return goal.statusColor || '#000';
  }
}
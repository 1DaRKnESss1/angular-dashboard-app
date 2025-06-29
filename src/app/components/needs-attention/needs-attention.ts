import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import attentionData from '../../data/needsAttentionData.json';

@Component({
  selector: 'app-needs-attention',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './needs-attention.html',
  styleUrls: ['./needs-attention.css']
})
export class NeedsAttentionComponent {
  attentionData = attentionData;
}
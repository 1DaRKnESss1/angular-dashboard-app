import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import communicationData from '../../data/communicationData.json';

// Інтерфейс для одного повідомлення для кращої типізації
interface Message {
  id: number;
  status: string;
  title: string;
  sender: string;
  date: string;
  snippet: string;
  attachments: number;
  isHighlighted: boolean;
}

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './communication.html',
  styleUrls: ['./communication.css']
})
export class CommunicationComponent {
  communicationData = communicationData;
  leftColumnItems: Message[] = this.communicationData.messages.filter(msg => msg.isHighlighted);
  rightColumnItems: Message[] = this.communicationData.messages.filter(msg => !msg.isHighlighted);
}
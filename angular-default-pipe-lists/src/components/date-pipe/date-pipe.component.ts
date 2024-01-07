import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-pipe.component.html',
  styleUrl: './date-pipe.component.scss'
})
export class DatePipeComponent {
  today: number = Date.now();
}


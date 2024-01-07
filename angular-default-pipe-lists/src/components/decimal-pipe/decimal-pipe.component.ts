import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decimal-pipe.component.html',
  styleUrl: './decimal-pipe.component.scss'
})
export class DecimalPipeComponent {
  pi: number = 3.14159265359;
}

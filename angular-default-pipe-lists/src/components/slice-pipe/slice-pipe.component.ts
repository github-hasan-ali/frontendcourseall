import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slice-pipe.component.html',
  styleUrl: './slice-pipe.component.scss'
})
export class SlicePipeComponent {
  str: string = 'abcdefghij';
}

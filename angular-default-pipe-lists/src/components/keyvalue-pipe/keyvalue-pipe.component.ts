import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-keyvalue-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyvalue-pipe.component.html',
  styleUrl: './keyvalue-pipe.component.scss'
})
export class KeyvaluePipeComponent {
  object: {[key: number]: string} = {4: 'foo', 1: 'bar', 2: 'emre', 3: 'hasan'};
  map = new Map([[255346346346, 'foo'], [3463463, 'bar'],[346346,'tayyip',],[3652,'Recep']]);
}

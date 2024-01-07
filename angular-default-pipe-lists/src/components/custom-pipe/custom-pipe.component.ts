import { Component } from '@angular/core';
import { CustomPipe } from '../../app/pipes/custom.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [CustomPipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.scss'
})
export class CustomPipeComponent {

}

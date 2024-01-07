import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LowerValueExpression } from '../../models/lowercase-pipe';

@Component({
  selector: 'app-lowercase-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lowercase-pipe.component.html',
  styleUrl: './lowercase-pipe.component.scss'
})
export class LowercasePipeComponent {
  value:LowerValueExpression={
      value:"HASAN"
  }
}

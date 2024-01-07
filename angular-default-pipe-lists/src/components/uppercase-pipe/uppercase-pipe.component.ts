import { CommonModule } from '@angular/common';
import { Component, ValueEqualityFn } from '@angular/core';
import { UpperValueExpression } from '../../models/uppercase-pipe';

@Component({
  selector: 'app-uppercase-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uppercase-pipe.component.html',
  styleUrl: './uppercase-pipe.component.scss'
})
export class UppercasePipeComponent {
    value:UpperValueExpression={
        value:"hasan"
    }
}

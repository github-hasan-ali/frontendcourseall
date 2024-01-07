import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Product } from '../../models/currency-pipe';

@Component({
  selector: 'app-currency-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-pipe.component.html',
  styleUrl: './currency-pipe.component.scss'
})
export class CurrencyPipeComponent{

 product:Product={
  
price:1.3495
 }
  constructor() { }
}

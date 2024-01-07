import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-plural-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i18n-plural-pipe.component.html',
  styleUrl: './i18n-plural-pipe.component.scss'
})
export class I18nPluralPipeComponent {
  itemCount: number = 0;

  increment(): void {
    this.itemCount++;
  }
  decrement(): void {
    if (this.itemCount > 0) {
      this.itemCount--;
    }
  }
}
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map, startWith, take } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [AsyncPipe,CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss'
})
export class AsyncPipeComponent {
  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {
    this.message$ = this.getResendObservable();
  }

  resend() {
    this.message$ = this.getResendObservable();
  }

  private getResendObservable() {
    return interval(3000).pipe(
      map(i => `Message #${i + 1}: ${this.messages[i]}`),
      take(this.messages.length),
      startWith('Waiting for messages...')
    );
  }
}

import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-btn-decrement',
  standalone: true,
  imports: [],
  templateUrl: './btn-decrement.component.html',
  styleUrl: './btn-decrement.component.css'
})
export class BtnDecrementComponent {
  constructor(private counterService: CounterService) { };
  decrement() {
    this.counterService.decrement();
  }
}

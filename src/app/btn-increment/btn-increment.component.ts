import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-btn-increment',
  standalone: true,
  imports: [],
  templateUrl: './btn-increment.component.html',
  styleUrl: './btn-increment.component.css'
})
export class BtnIncrementComponent {
  constructor(private counterService: CounterService) { };
  increment() {
    this.counterService.increment();
  }



}

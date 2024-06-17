import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-increment',
  standalone: true,
  imports: [],
  templateUrl: './btn-increment.component.html',
  styleUrl: './btn-increment.component.css'
})
export class BtnIncrementComponent {
  public counter: number = 0;
  increment(): number {
    return ++this.counter;
  }

}

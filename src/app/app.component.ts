import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnIncrementComponent } from './btn-increment/btn-increment.component';
import { BtnDecrementComponent } from './btn-decrement/btn-decrement.component';
import { CounterService } from './counter.service';
import { StandardModule } from './standard/standard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BtnIncrementComponent,
    BtnDecrementComponent,
    StandardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public counterService: CounterService) { }
  title = 'atelier-angular';
}

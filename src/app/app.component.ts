import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnIncrementComponent } from './btn-increment/btn-increment.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BtnIncrementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atelier-angular';
}

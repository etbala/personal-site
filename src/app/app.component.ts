import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}

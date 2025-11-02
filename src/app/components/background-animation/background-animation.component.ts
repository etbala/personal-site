import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-anim',
  imports: [CommonModule],
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.scss']
})
export class BackgroundAnimationComponent implements OnInit {

  public particles: any[] = [];

  ngOnInit(): void {
    this.createParticles();
  }

  createParticles(): void {
    for (let i = 0; i < 50; i++) {
      const size = `${Math.random() * 10 + 5}px`;

      this.particles.push({
        // We pre-calculate all the style strings here
        width: size,
        height: size,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 20 + 10}s`
      });
    }
  }
}
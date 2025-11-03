import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-item',
  imports: [],
  templateUrl: './tech-item.component.html',
  styleUrl: './tech-item.component.scss'
})
export class TechItemComponent {
  @Input() item: string = '';
}

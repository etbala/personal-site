import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-category.component.html',
  styleUrl: './tech-category.component.scss'
})
export class TechCategoryComponent {
  @Input() title: string = '';
  @Input() items: string[] = [];
}
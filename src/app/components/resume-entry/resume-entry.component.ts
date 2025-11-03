import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechItemComponent } from "../tech-item/tech-item.component";

@Component({
  selector: 'app-resume-entry',
  standalone: true,
  imports: [CommonModule, TechItemComponent],
  templateUrl: './resume-entry.component.html',
  styleUrl: './resume-entry.component.scss'
})
export class ResumeEntryComponent {
  @Input() entryTitle?: string;
  @Input() subheader?: string;
  @Input() location?: string;
  @Input() date?: string;
  @Input() url?: string;
  @Input() details?: string[];
  @Input() technologies?: string[];

  getDisplayUrl(url: string | undefined): string {
    if (!url) return '';
    return url.replace(/^(https?:\/\/)/, '').replace(/\/$/, ''); // Remove http(s):// and trailing slash
  }
}
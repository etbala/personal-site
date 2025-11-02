import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ThemeService } from '.../theme.service'; // You would inject your theme service here

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  // This state should ideally come from a ThemeService
  isDarkMode = false; // Default state
  iconPath = 'assets/icons/moon.svg';

  // constructor(private themeService: ThemeService) {
  //   this.isDarkMode = this.themeService.isDarkMode();
  //   this.updateIcon();
  // }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateIcon();
    // this.themeService.setTheme(this.isDarkMode ? 'dark' : 'light');
    console.log('Theme toggled. Implement ThemeService to apply changes.');
  }

  private updateIcon(): void {
    this.iconPath = this.isDarkMode ? 'assets/icons/sun.svg' : 'assets/icons/moon.svg';
  }
}
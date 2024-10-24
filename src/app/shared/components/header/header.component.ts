import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  translate = inject(TranslationService);

  isMenuOpen = false;

  closeMenu() {
    const body = document.body;
    this.isMenuOpen = false;
    body.style.overflow = 'auto'
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const body = document.body;

    if (this.isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  isMenuActive() {
    return this.isMenuOpen ? 'open' : '';
  }
}
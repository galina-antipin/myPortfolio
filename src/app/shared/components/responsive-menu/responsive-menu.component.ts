import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-responsive-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.scss'
})
export class ResponsiveMenuComponent {
  translate = inject(TranslationService);

  isOpen = true;

  closeMenu() {
    this.isOpen = !this.isOpen; 
  }
}


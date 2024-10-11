import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-menu',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.scss'
})
export class ResponsiveMenuComponent{

  translate = inject(TranslationService);

  isOpen:boolean = true;
  isClosing: boolean = false;

  closeMenu() {
    this.isOpen = !this.isOpen; 
    this.isClosing = true; 
  }
}


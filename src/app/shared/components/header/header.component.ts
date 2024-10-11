import { Component, inject, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleMenu = new EventEmitter<void>();

  translate = inject(TranslationService);

  toggleMenuClick() {
    this.toggleMenu.emit();
  }
}
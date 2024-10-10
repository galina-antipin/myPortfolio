import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: './../../../assets/img/angular-icon.png' },
    { name: 'TypeScript', icon: './../../../assets/img/typescript-icon.png' },
    { name: 'JavaScript', icon: './../../../assets/img/javascript-icon.png' },
    { name: 'HTML', icon: './../../../assets/img/html-icon.png' },
    { name: 'Scrum', icon: './../../../assets/img/scrum-icon.png' },
    { name: 'Firebase', icon: './../../../assets/img/firebase-icon.png' },
    { name: 'Git', icon: './../../../assets/img/git-icon.png' },
    { name: 'CSS', icon: './../../../assets/img/css-icon.png' },
    { name: 'Rest API', icon: './../../../assets/img/api-icon.png' },
    { name: 'Material Design', icon: './../../../assets/img/material-design-icon.png' },
    { name: 'Growth Mindset', icon: './../../../assets/img/study-icon.png' },
  ];

  translate = inject(TranslationService);
}

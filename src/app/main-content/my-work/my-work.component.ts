import { CommonModule} from '@angular/common';
import { Component, inject  } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})

export class MyWorkComponent {
  projects = [
    {
      id: 'JOIN', 
      technologies: 'JavaScript | Firebase | HTML | CSS',
      image: './../../../assets/img/join-img.png',
      liveLink: 'https://join.galina-antipin.de', 
      githubLink: 'https://github.com/galina-antipin/join'
    },
    {
      id: 'POLLO_LOCO',
      technologies: 'JavaScript | HTML | CSS',
      image: './../../../assets/img/game-img.png',
      liveLink: 'https://el-pollo-loco.galina-antipin.de',
      githubLink: 'https://github.com/galina-antipin/El-Pollo-Loco'
    },
    {
      id: 'POKEDEX',
      technologies: 'JavaScript | HTML | CSS | API',
      image: './../../../assets/img/pokedex-img.png',
      liveLink: '#',
      githubLink: 'https://pokedex/galina-antipin/Pokedex'
    }
  ];

  translate = inject(TranslationService);
}
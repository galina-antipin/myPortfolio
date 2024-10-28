import { CommonModule} from '@angular/common';
import { Component, inject, OnInit  } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})

export class MyWorkComponent implements OnInit {
    ngOnInit(): void {
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
      });
    }

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
      githubLink: 'https://github.com/galina-antipin/El-Pollo-Loco-Game'
    },
    {
      id: 'POKEDEX',
      technologies: 'JavaScript | HTML | CSS | API',
      image: './../../../assets/img/pokedex-img.png',
      liveLink: 'https://pokedex.galina-antipin.de',
      githubLink: 'https://github.com/galina-antipin/Pokedex'
    }
  ];

  translate = inject(TranslationService);
}
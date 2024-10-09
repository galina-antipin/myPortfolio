import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})

export class MyWorkComponent {
  projects = [
    {
      title: 'Join',
      description: 'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: 'JavaScript | Firebase | HTML | CSS',
      image: './../../../assets/img/join-img.png',
      liveLink: 'https://join.galina-antipin.de', 
      githubLink: 'https://github.com/galina-antipin/join'
    },
    {
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript | HTML | CSS',
      image: './../../../assets/img/game-img.png',
      liveLink: 'https://el-pollo-loco.galina-antipin.de',
      githubLink: 'https://github.com/galina-antipin/El-Pollo-Loco'
    },
    {
      title: 'Pokédex',
      description: 'Based on a PokéAPI a simple library that provides and catalogues Pokemon information.',
      technologies: 'JavaScript | HTML | CSS | API',
      image: './../../../assets/img/pokedex-img.png',
      liveLink: '#',
      githubLink: 'https://pokedex/galina-antipin/Pokedex'
    }
  ];
}
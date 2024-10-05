import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, SkillsComponent,MyWorkComponent,ReferencesComponent,ContactComponent,LandingPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

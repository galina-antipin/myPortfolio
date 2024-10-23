import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';

import { MyWorkComponent } from './main-content/my-work/my-work.component';
import { ReferencesComponent } from './main-content/references/references.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutMeComponent, HeaderComponent, FooterComponent, ContactComponent, ImprintComponent, LandingPageComponent, MyWorkComponent, ReferencesComponent, SkillsComponent, PrivacyPolicyComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isOpen:boolean = false;
  title:string = 'portfolio';
}

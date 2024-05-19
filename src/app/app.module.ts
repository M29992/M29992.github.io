import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavRailComponent } from './components/nav/nav-rail/nav-rail.component';
import {FooterComponent} from './components/footer/footer.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { EducationComponent } from './components/education-section/education/education.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { SkillComponent } from './components/skills-section/skill/skill.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ExperienceComponent } from './components/experience-section/experience/experience.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { ProjectComponent } from './components/project-section/project/project.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { ProfileComponent } from './components/welcome-section/profile/profile.component';
import { ShowcaseComponent } from './components/welcome-section/showcase/showcase.component';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    NavRailComponent,
    FooterComponent,
    EducationSectionComponent,
    EducationComponent,
    SkillsSectionComponent,
    SkillComponent,
    ExperienceSectionComponent,
    ExperienceComponent,
    ProjectSectionComponent,
    ProjectComponent,
    WelcomeSectionComponent,
    ProfileComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

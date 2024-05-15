import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavRailComponent } from './components/nav/nav-rail/nav-rail.component';
import {FooterComponent} from './components/footer/footer.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { EducationComponent } from './components/education-section/education/education.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { SkillComponent } from './components/skills-section/skill/skill.component';
@NgModule({
  declarations: [
    AppComponent,
    NavRailComponent,
    FooterComponent,
    EducationSectionComponent,
    EducationComponent,
    SkillsSectionComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

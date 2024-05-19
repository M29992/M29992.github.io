import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experiencePosition: string ='';
  @Input() experienceCompany: string ='';
  @Input() experienceStartDate: Date = new Date('');
  @Input() experienceEndDate: Date = new Date('');
  @Input() experienceTechnologies: string[] = [];
  @Input() experienceResponsibilies: string[] = []; 

  showMore: boolean = false;
  maxResponsibilities: number = 5;

  get displayedResponsibilities() {
    return this.showMore ? this.experienceResponsibilies : this.experienceResponsibilies.slice(0, this.maxResponsibilities);
  }

  get showMoreButton() {
    return this.experienceResponsibilies.length > this.maxResponsibilities;
  }

  get showMoreText() {
    return this.showMore ? 'Show Less' : 'Show More';
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  constructor() {}
}

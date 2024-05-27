import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() educationFieldOfStudy: string = 'Unknown Field';
  @Input() educationInstitution: string = 'Unknown Institution';
  @Input() educationGraduationDate: Date = new Date();
  @Input() educationStartDate: Date = new Date();
  @Input() educationLevel: string = 'Unknown Level';
  @Input() educationGrade: string = 'N/A';
  @Input() educationActivities: string[] = [];
  @Input() educationTechnologies: { name: string, iconUrl: string }[] = [];

  ngOnInit(): void {
    this.educationActivities = this.educationActivities.length ? this.educationActivities : [''];
    this.educationTechnologies = this.educationTechnologies.length ? this.educationTechnologies : [{ name: '', iconUrl: '' }];
  }
}

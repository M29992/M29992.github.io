import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent {

  @Input() educationFieldOfStudy: string = 'Computer Science';
  @Input() educationInstitution: string = 'open university';
  @Input() educationGraduationDate: Date = new Date('2020');
  @Input() educationStartDate: Date = new Date('2016');
  @Input() educationLevel: string = 'Bachelor';
  @Input() educationGrade: number = 3.5;
  @Input() educationTechnologies: string[] = ['Angular', 'TypeScript', 'HTML', 'CSS'];

  constructor() {}

}
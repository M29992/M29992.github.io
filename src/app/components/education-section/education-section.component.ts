import { Component } from '@angular/core';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss']
})
export class EducationSectionComponent {
  education: any[] = [
    {
      educationFieldOfStudy: 'Computer Science',
      educationInstitution: 'open university',
      educationGraduationDate: new Date('2020'),
      educationStartDate: new Date('2016'),
      educationLevel: 'Bachelor',
      educationGrade: 3.5,
      educationTechnologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
    },
    {
      educationFieldOfStudy: 'Computer Science',
      educationInstitution: 'open university',
      educationGraduationDate: new Date('2020'),
      educationStartDate: new Date('2016'),
      educationLevel: 'Bachelor',
      educationGrade: 3.5,
      educationTechnologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
    }
  ];
}

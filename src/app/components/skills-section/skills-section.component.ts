import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  skills: any[] = [ 
    {
      skillTitle: 'Git',
      skillScore: 90,
      skillIcon: 'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png',
      skillVerifiedDate: '2021-01-01',
    },
    {
      skillTitle: 'Java',
      skillScore: 110,
      skillIcon: 'https://pluralsight.imgix.net/paths/path-icons/java-7b1f328d7d.png',
      skillVerifiedDate: '2021-01-01',
    },
    {
      skillTitle: 'Python',
      skillScore: 160,
      skillIcon: 'https://pluralsight.imgix.net/paths/path-icons/python-7c70baaac6.png',
      skillVerifiedDate: '2021-01-01',
    },
    {
      skillTitle: 'JavaScript',
      skillScore: 210,
      skillIcon: 'https://pluralsight.imgix.net/paths/path-icons/javascript-0262e4f0b8.png',
      skillVerifiedDate: '2021-01-01',
    },
    {
      skillTitle: 'C#',
      skillScore: 260,
      skillIcon: 'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png',
      skillVerifiedDate: '2021-01-01',
    }
  ];
}

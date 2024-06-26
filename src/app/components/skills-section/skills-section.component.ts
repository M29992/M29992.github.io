import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit{
  skills: any[] = []
  
    constructor(private dataService: DataService) { }
  
    ngOnInit() {
      this.dataService.getData().subscribe(data => {
        this.skills = data.skills;
      });
    }
  

}

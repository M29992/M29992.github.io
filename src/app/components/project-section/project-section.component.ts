import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent  implements OnInit{
  projects: any[] = []
  
    constructor(private dataService: DataService) { }
  
    ngOnInit() {
      this.dataService.getData().subscribe(data => {
        this.projects = data.projects;
      });
    }

}


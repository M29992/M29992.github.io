import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  
  name: string = '';
  title: string = '';
  statement: string = '';
  imageUrl: string = '';
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.name = data.name;
      this.title = data.title;
      this.statement = data.careerObjective;
      this.imageUrl = data.imageUrl;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss']
})
export class EducationSectionComponent implements OnInit{
  
  education: any[] = []
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.education = data.educationAndQualifications;
    });
  }


  currentSlideIndex = 0;
  animationDirection: 'right' | 'left' = 'left';

  plusSlides(n: number) {
    this.animationDirection = n > 0 ? 'left' : 'right';
    this.showSlides(this.currentSlideIndex + n);
  }

  currentSlide(index: number) {
    this.animationDirection = index > this.currentSlideIndex ? 'right' : 'left';
    this.showSlides(index);
  }

  showSlides(index: number) {
    const slidesCount = this.education.length;
    this.currentSlideIndex = (index + slidesCount) % slidesCount;
  }
}

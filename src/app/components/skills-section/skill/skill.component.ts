import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnChanges {

  @Input() skillTitle: string = '';
  @Input() skillScore: number = 0;
  @Input() skillIcon: string = '';
  @Input() skillVerifiedDate: string = '';
  skillColor: string = '';
  skillLevel: string = '';
  skillBorderColor: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skillScore']) {
      this.setSkillColor();
      this.setSkillLevel();
    }
    this.skillBorderColor = `10px solid ${this.skillColor}`;
  }

  // Calculate skillColor based on skillScore
  setSkillColor(): void {
    if (this.skillScore >= 0 && this.skillScore < 100) {
      this.skillColor = 'lightsalmon'; // Novice
    } else if (this.skillScore >= 100 && this.skillScore < 150) {
      this.skillColor = 'lightgreen'; // Emerging
    } else if (this.skillScore >= 150 && this.skillScore < 200) {
      this.skillColor = 'limegreen'; // Average
    } else if (this.skillScore >= 200 && this.skillScore < 250) {
      this.skillColor = 'mediumseagreen'; // Above average
    } else if (this.skillScore >= 250 && this.skillScore <= 300) {
      this.skillColor = 'skyblue'; // Expert
    } else {
      this.skillColor = 'white'; // Default color
    }
  }

  setSkillLevel(): void {
    if (this.skillScore >= 0 && this.skillScore < 100) {
      this.skillLevel = 'Novice';
    } else if (this.skillScore >= 100 && this.skillScore < 150) {
      this.skillLevel = 'Emerging';
    } else if (this.skillScore >= 150 && this.skillScore < 200) {
      this.skillLevel = 'Average';
    } else if (this.skillScore >= 200 && this.skillScore < 250) {
      this.skillLevel = 'Above Average';
    } else if (this.skillScore >= 250 && this.skillScore <= 300) {
      this.skillLevel = 'Expert';
    } else {
      this.skillLevel = 'Unknown';
    }
  }
}

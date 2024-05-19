import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() title: string = 'Project Title';
  @Input() description: string = 'Description of the project';
  @Input() technologies: string[] = ['Angular', 'TypeScript', 'HTML', 'CSS'];
  @Input() demoUrl: string = 'https://github.com';
  @Input() codeUrl: string = 'https://github.com';
  @Input() imageUrl: string = 'https://via.placeholder.com/150';

  isPopupVisible: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  adjustBoxShadow(event: MouseEvent): void {
    const projectElement = this.elementRef.nativeElement.querySelector('.project');
    const rect = projectElement.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;

    const horizontalShadow = offsetX > 0.5 ? -1 : 1;
    const verticalShadow = offsetY > 0.5 ? -1 : 1;

    const shadowX = horizontalShadow * 2;
    const shadowY = verticalShadow * 2;
    projectElement.style.boxShadow = `${shadowX}px ${shadowY}px 4px rgba(128, 0, 128, 0.1)`;
  }

  resetBoxShadow(): void {
    const projectElement = this.elementRef.nativeElement.querySelector('.project');
    projectElement.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }

  showPopup(): void {
    this.isPopupVisible = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  hidePopup(): void {
    this.isPopupVisible = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  onOverlayClick(event: MouseEvent): void {
    if (this.isPopupVisible && !(event.target as HTMLElement).closest('.popup-content')) {
      this.hidePopup();
    }
  }
}

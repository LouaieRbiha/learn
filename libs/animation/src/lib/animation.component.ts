import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learn-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent {
  headers = ['Title', 'Description', 'URL', 'Actions'];
  data = [
    {
      title: 'Angular',
      description:
        'Angular is a platform for building mobile and desktop web applications.',
      url: 'https://angular.io',
    },
    {
      title: 'Angular CLI',
      description: 'Angular CLI is a tool for developing Angular applications.',
      url: 'https://cli.angular.io/',
    },
    {
      title: 'Angular Universal',
      description:
        'Angular Universal is a tool for server-side rendering Angular applications.',
      url: 'https://angular.io/guide/universal',
    },
    {
      title: 'Angular Material',
      description:
        'Angular Material is a UI component library for Angular applications.',
      url: 'https://material.angular.io/',
    },
    {
      title: 'Angular Flex Layout',
      description:
        'Angular Flex Layout is a library providing a flexible and responsive grid.',
      url: 'https://flex-layout.angular.io/',
    },
  ];

  removeRow(index: number) {
    console.log('index :>> ', index);
  }
}

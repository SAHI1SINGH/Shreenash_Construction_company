import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSectionComponent {

  images = [
    '/images/maintenance/hero.jpeg',
    '/images/maintenance/stat.jpeg',
    '/images/maintenance/galary/1.jpg',
    '/images/maintenance/galary/11.jpg'
  ];

}
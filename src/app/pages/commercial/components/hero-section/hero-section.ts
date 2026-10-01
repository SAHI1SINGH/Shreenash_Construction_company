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
    '/images/home/service/commercial.jpeg',
    '/images/home/stats/stat-logo.png',
    '/images/commercial/galary/3.jpeg',
    '/images/commercial/galary/4.jpeg'
  ];

}
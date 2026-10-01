import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSectionComponent {

  images = [
    '/images/residential/logo.png',
    '/images/residential/1.png',
    '/images/home/galary/30.jpeg'
  ];

}
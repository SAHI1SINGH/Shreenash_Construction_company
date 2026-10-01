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
    '/images/customized/hero/hero.jpeg',
    '/images/customized/galary/7.png',
    '/images/customized/galary/2.jpeg',
    '/images/customized/galary/3.jpeg'
  ];

}
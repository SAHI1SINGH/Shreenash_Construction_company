import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-section',
  standalone: true,

  imports: [
    RouterModule
  ],

  templateUrl: './footer-section.html',

  styleUrls: [
    './footer-section.css'
  ],
})

export class FooterSectionComponent {

  /* =========================
     CURRENT YEAR
  ========================= */

  currentYear: number =
  new Date().getFullYear();

}
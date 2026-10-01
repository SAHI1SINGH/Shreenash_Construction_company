import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smartsolution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smartsolution.html',
  styleUrl: './smartsolution.css',
})

export class SmartsolutionComponent {

  /* =========================
     ACTIVE TAB
  ========================= */

  activeTab: string = 'commercial';

  /* =========================
     SWITCH TAB
  ========================= */

  switchTab(tab: string){

    this.activeTab = tab;

  }

  /* =========================
     SCROLL TO CONTACT
  ========================= */

  scrollToContact(){

    const section =
    document.getElementById('contact');

    section?.scrollIntoView({
      behavior: 'smooth'
    });

  }

}
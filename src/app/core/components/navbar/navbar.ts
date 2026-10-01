import { Component, HostListener, OnInit } from '@angular/core';

import {
  Router,
  NavigationEnd,
  RouterModule
} from '@angular/router';

import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {

  isMenuOpen           = false;
  isSolarDropdownOpen  = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
      });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.mobile-menu') &&
      !target.closest('.hamburger')
    ) {
      this.isMenuOpen = false;
    }
    if (!target.closest('.dropdown')) {
      this.isSolarDropdownOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen          = false;
    this.isSolarDropdownOpen = false;
  }

  toggleSolarDropdown() {
    this.isSolarDropdownOpen = !this.isSolarDropdownOpen;
  }
}
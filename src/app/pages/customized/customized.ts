import { Component } from '@angular/core';
import {FaqSectionComponent} from "../../core/components/faq-section/faq-section";
import {NavbarComponent} from "../../core/components/navbar/navbar";
import {HeroSectionComponent} from "./components/hero-section/hero-section";
import { ContactSectionComponent } from '../home/components/contact-section/contact-section';
import { FooterSectionComponent } from './components/footer-section/footer-section';
import { GallerySectionComponent } from './components/gallery-section/gallery-section';
import { ServicesSectionComponent} from './components/services-section/services-section';

@Component({
  selector: 'app-customized',
  imports: [FaqSectionComponent, NavbarComponent, HeroSectionComponent, ContactSectionComponent, FooterSectionComponent, GallerySectionComponent, ServicesSectionComponent],
  templateUrl: './customized.html',
  styleUrl: './customized.css',
})
export class Customized {
  customFaqs = [

  {
    question:
    'Do you provide customized solar solutions?',

    answer:
    'Yes, we design customized solar systems based on site requirements and energy needs.'
  },

  {
    question:
    'Can you design solar solutions for special projects?',

    answer:
    'Absolutely. We provide tailored solutions for institutions, agriculture, industries, and unique energy applications.'
  },

  {
    question:
    'Do customized systems include battery backup?',

    answer:
    'Yes, battery storage and hybrid systems can be integrated based on project requirements.'
  },

  {
    question:
    'How long does customized project planning take?',

    answer:
    'Project planning duration depends on complexity, site conditions, and required approvals.'
  }

];
}

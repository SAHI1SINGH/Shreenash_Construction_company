import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import {NavbarComponent} from "../../core/components/navbar/navbar";
import { PartnerSectionComponent } from '../../core/components/partner-section/partner-section';
import {StatSectionComponent} from "./components/stat-section/stat-section";
import {AboutComponent} from "./components/about/about";
import {Why} from "./components/why/why";
import {ChooseUsComponent} from "../commercial/components/choose-us/choose-us";
import { ContactSectionComponent } from '../home/components/contact-section/contact-section';
import {GallerySectionComponent} from "../maintenance/components/gallery-section/gallery-section";
import { FooterSectionComponent } from "./components/footer-section/footer-section";
import { FaqSectionComponent } from '../../core/components/faq-section/faq-section';

@Component({
  selector: 'app-maintenance',
  imports: [NavbarComponent,
    HeroSectionComponent,
    PartnerSectionComponent,
    StatSectionComponent,
    AboutComponent,
    Why,
    ChooseUsComponent,
    ContactSectionComponent,
    GallerySectionComponent,
     FooterSectionComponent,
    FaqSectionComponent
    ],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.css',
})
export class Maintenance {
  omFaqs = [

  {
    question:
    'Why is solar panel cleaning important?',

    answer:
    'Dust and dirt reduce solar efficiency. Regular cleaning helps maximize energy production.'
  },

  {
    question:
    'How often should solar systems be maintained?',

    answer:
    'Routine inspections and maintenance are generally recommended every 3 to 6 months.'
  },

  {
    question:
    'What happens if my system stops generating power?',

    answer:
    'Our O&M team quickly identifies faults and resolves issues to restore system performance.'
  },

  {
    question:
    'Do you provide remote monitoring support?',

    answer:
    'Yes, we provide real-time monitoring and performance tracking for solar systems.'
  }

];
}

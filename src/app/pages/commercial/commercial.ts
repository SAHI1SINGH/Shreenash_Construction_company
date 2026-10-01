import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { PartnerSectionComponent } from '../../core/components/partner-section/partner-section';
import { ContactSectionComponent } from '../home/components/contact-section/contact-section';
import {GallerySectionComponent} from '../commercial/components/gallery-section/gallery-section';
import { FooterSectionComponent } from './components/footer-section/footer-section';
import { StatSectionComponent } from './components/stat-section/stat-section';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section';
import { SmartsolutionComponent } from './components/smartsolution/smartsolution';
import { ChooseUsComponent } from './components/choose-us/choose-us';
import { FaqSectionComponent } from '../../core/components/faq-section/faq-section';
@Component({
  selector: 'app-commercial',
  imports: [NavbarComponent, 
            HeroSectionComponent,
            PartnerSectionComponent,
            ContactSectionComponent,
            FooterSectionComponent,
            GallerySectionComponent,
            StatSectionComponent,
            BenefitsSectionComponent,
            SmartsolutionComponent,
            ChooseUsComponent,
            FaqSectionComponent
          ],
  templateUrl: './commercial.html',
  styleUrl: './commercial.css',
})
export class CommercialComponent {
  commercialFaqs = [

  {
    question:
    'How can commercial solar reduce electricity costs?',

    answer:
    'Commercial solar systems help businesses generate their own electricity and reduce dependency on grid power.'
  },

  {
    question:
    'Is solar suitable for industries and factories?',

    answer:
    'Yes, solar is highly beneficial for industries with high daytime electricity consumption.'
  },

  {
    question:
    'What is the ROI for commercial solar systems?',

    answer:
    'Most commercial solar projects achieve ROI within 3 to 5 years depending on consumption and project size.'
  },

  {
    question:
    'Can solar systems be installed without stopping operations?',

    answer:
    'Yes, installations are planned carefully to minimize operational disruption.'
  }

];
}

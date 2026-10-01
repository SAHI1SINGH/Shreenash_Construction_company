import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { PartnerSectionComponent } from '../../core/components/partner-section/partner-section';
import{ContactSectionComponent} from '../home/components/contact-section/contact-section';
import { GallerySectionComponent } from '../residential/components/gallery-section/gallery-section';
import { FooterSectionComponent } from './components/footer-section/footer-section';
import { SubsidyComponent } from './components/subsidy/subsidy';
import { StatComponent } from './components/stat/stat';
import { SolarcapacityComponent } from './components/solarcapacity/solarcapacity';
import { FinancialComponent } from './components/financial/financial';
import { FaqSectionComponent } from '../../core/components/faq-section/faq-section';
@Component({
  selector: 'app-residential',
  imports: [NavbarComponent, 
            HeroSectionComponent,
            PartnerSectionComponent,
            ContactSectionComponent,
            GallerySectionComponent,
            FooterSectionComponent,
            SubsidyComponent,
            StatComponent, 
            SolarcapacityComponent,
            FinancialComponent,
            FaqSectionComponent
          ],
  templateUrl: './residential.html',
  styleUrl: './residential.css',
})
export class ResidentialComponent {
residentialFaqs = [

  {
    question:
    'How much roof area is required for residential solar?',

    answer:
    'Typically, a 1kW solar system requires around 80 to 100 sq.ft of shadow-free rooftop area.'
  },

  {
    question:
    'Can I run my home completely on solar power?',

    answer:
    'Yes, depending on your electricity consumption and system size, solar can significantly reduce or fully offset your electricity bill.'
  },

  {
    question:
    'Will I get subsidy for rooftop solar?',

    answer:
    'Yes, residential rooftop systems are eligible for subsidy under PM Surya Ghar Yojana as per government norms.'
  },

  {
    question:
    'What is the lifespan of residential solar panels?',

    answer:
    'Most solar panels have a lifespan of 25 years or more with proper maintenance.'
  }

];
}
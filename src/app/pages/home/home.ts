import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../../core/components/navbar/navbar';
import { ServicesSectionComponent } from './components/services-section/services-section';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { StatsSectionComponent } from './components/stat-section/stat-section';
import { PartnerSectionComponent } from '../../core/components/partner-section/partner-section';
import { BenefitsSectionComponent } from './components/benifits-section/benifits-section';
import { WorkProcessSectionComponent } from './components/work-process-section/work-process-section';
import { MapSectionComponent } from './components/map-section/map-section';
import { AppLaunchSectionComponent } from './components/app-launch-section/app-launch-section';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { TestimonialsSectionComponent } from '../../core/components/testimonials-section/testimonials-section';
import { GallerySectionComponent } from "./components/gallery-section/gallery-section";
import { FooterSectionComponent } from "./components/footer-section/footer-section";

/* FAQ IMPORT */
import { FaqSectionComponent } from '../../core/components/faq-section/faq-section';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    NavbarComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    StatsSectionComponent,
    PartnerSectionComponent,
    BenefitsSectionComponent,
    WorkProcessSectionComponent,
    MapSectionComponent,
    AppLaunchSectionComponent,
    ContactSectionComponent,
    TestimonialsSectionComponent,
    GallerySectionComponent,
    FooterSectionComponent,
    RouterModule,

    /* FAQ */
    FaqSectionComponent
  ],

  templateUrl: './home.html',

  styleUrls: ['./home.css']
})

export class HomeComponent {

  homeFaqs = [

    {
      question:
      'What is PM Surya Ghar Yojana?',

      answer:
      'PM Surya Ghar Yojana is a MNRE government subsidy scheme that helps homeowners install On-Grid Connected rooftop solar systems at lower cost.'
    },

    {
      question:
      'How much subsidy can I get?',

      answer:
      'Subsidy depends on your rooftop solar capacity and latest government guidelines.'
    },

    {
      question:
      'How long does installation take?',

      answer:
      'Most residential solar systems are installed within 3 to 5 days after approval.'
    },

    {
      question:
      'Do solar panels work during cloudy weather?',

      answer:
      'Yes, solar panels still generate electricity during cloudy weather, though efficiency may reduce slightly.'
    }

  ];

}
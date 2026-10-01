import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.html',
  styleUrls: ['./faq-section.css']
})
export class FaqSectionComponent {

  @Input() title: string = '';

  @Input() subtitle: string = '';

  @Input() faqs: {
    question: string;
    answer: string;
    open?: boolean;
  }[] = [];

  toggleFaq(index: number){

    this.faqs[index].open =
    !this.faqs[index].open;

  }

}
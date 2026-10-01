import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.html',
  styleUrls: ['./testimonials-section.css']
})
export class TestimonialsSectionComponent
implements AfterViewInit, OnDestroy {

  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLElement>;
  @ViewChild('track')           track!: ElementRef<HTMLElement>;

  testimonials = [
  {
    name: 'Shyam Yadav',
    location: 'Raipur',
    rating: 5,
    review: 'Tadoba Solutions made the entire process seamless. Our energy bills dropped by 80%.'
  },
  {
    name: 'G. P. Rathore',
    location: 'Raipur',
    rating: 4,
    review: 'The team was professional and completed installation in just two days.'
  },
  {
    name: 'Ramesh Sharma',
    location: 'Raipur',
    rating: 5,
    review: 'Best investment for our home. The savings are incredible and the support is top-notch.'
  },
  {
    name: 'Rajesh Singh Kshatriya',
    location: 'Raigarh',
    rating: 4,
    review: 'Very professional support team and excellent maintenance service.'
  },
  {
    name: 'Devendra Prasad Patel',
    location: 'Raigarh',
    rating: 5,
    review: 'Installation was fast and Professional. The savings are incredible.'
  },
  {
    name: 'Rohit Kumar Rajak',
    location: 'Kanker',
    rating: 4,
    review: 'Highly recommend Tadoba Solutions for residential solar solutions.'
  }
];

  loopTestimonials = [
    ...this.testimonials,
    ...this.testimonials,
    ...this.testimonials
  ];

  currentIndex      = 0;
  currentTranslate  = 0;
  cardWidth         = 0;
  gap               = 0;
  transitionEnabled = true;

  private autoSlideRef: any;
  private touchStartX = 0;

  // ── Lifecycle ─────────────────────────────────────────────────

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.init();
      this.startAutoSlide();
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideRef);
  }

  // ── Core init ─────────────────────────────────────────────────
  // Always called on load and every resize.
  // Measures the REAL container width from DOM — never guesses.

  private init(): void {

    const containerWidth =
      this.sliderContainer.nativeElement.offsetWidth;

    if (window.innerWidth <= 1024) {
      // Mobile + Tablet → 1 card, no gap
      this.cardWidth = containerWidth;
      this.gap       = 0;
    } else {
      // Desktop → 3 cards, 2 gaps of 30px
      this.gap       = 30;
      this.cardWidth = (containerWidth - this.gap * 2) / 3;
    }

    // Set width on every card element directly
    const cards =
      Array.from(this.track.nativeElement.children) as HTMLElement[];

    cards.forEach(card => {
      card.style.width    = this.cardWidth + 'px';
      card.style.minWidth = this.cardWidth + 'px';
    });

    // Set gap on track
    this.track.nativeElement.style.gap = this.gap + 'px';

    // Always reset to start of middle clone set, no animation
    this.currentIndex = this.testimonials.length;
    this.jumpTo(this.currentIndex);
  }

  @HostListener('window:resize')
  onResize(): void {
    clearInterval(this.autoSlideRef);
    setTimeout(() => {
      this.init();
      this.startAutoSlide();
    }, 100);
  }

  // ── Navigation ────────────────────────────────────────────────

  nextTestimonial(): void {
    this.currentIndex++;
    this.slideTo(this.currentIndex);

    // Reached end of second set → silently jump back to middle set
    if (this.currentIndex >= this.testimonials.length * 2) {
      setTimeout(() => {
        this.currentIndex = this.testimonials.length;
        this.jumpTo(this.currentIndex);
      }, 650);
    }
  }

  prevTestimonial(): void {
    this.currentIndex--;
    this.slideTo(this.currentIndex);

    // Went before middle set → silently jump forward to second set
    if (this.currentIndex < this.testimonials.length) {
      setTimeout(() => {
        this.currentIndex = this.testimonials.length * 2 - 1;
        this.jumpTo(this.currentIndex);
      }, 650);
    }
  }

  // ── Slide helpers ─────────────────────────────────────────────

  private slideTo(index: number): void {
    this.transitionEnabled = true;
    this.currentTranslate  = index * (this.cardWidth + this.gap);
  }

  private jumpTo(index: number): void {
    this.transitionEnabled = false;
    this.currentTranslate  = index * (this.cardWidth + this.gap);
  }

  // ── Auto slide ────────────────────────────────────────────────

  private startAutoSlide(): void {
    this.autoSlideRef = setInterval(() => {
      this.nextTestimonial();
    }, 2500);
  }

  // ── Touch / Swipe ─────────────────────────────────────────────

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    clearInterval(this.autoSlideRef); // pause while swiping
  }

  onTouchEnd(event: TouchEvent): void {
    const diff = this.touchStartX - event.changedTouches[0].screenX;
    if      (diff >  50) this.nextTestimonial();
    else if (diff < -50) this.prevTestimonial();
    this.startAutoSlide(); // resume after swipe
  }
}
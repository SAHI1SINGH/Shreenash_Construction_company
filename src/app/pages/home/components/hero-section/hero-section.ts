import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css']
})

export class HeroSectionComponent implements AfterViewInit {

  @ViewChild('bgVideo')
  bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {

    const video = this.bgVideo.nativeElement;

    /* FORCE MUTE */
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    /* PLAY VIDEO */
    video.play()
      .catch(error => {
        console.log('Autoplay blocked:', error);
      });

  }

}
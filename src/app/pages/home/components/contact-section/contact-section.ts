import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSectionComponent {

  readonly FORM_ACTION   = 'https://docs.google.com/forms/d/e/1FAIpQLSeGuEM71EBFuNtlQ924LjjBdrWkqP1ESuche2ttVXvQ3GKMow/formResponse';
  readonly ENTRY_NAME    = 'entry.1359158352';
  readonly ENTRY_PHONE   = 'entry.378841850';
  readonly ENTRY_ADDRESS = 'entry.1142313134';
  readonly ENTRY_QUERY   = 'entry.193344918';

  showSuccess  = false;
  iframeInited = false;

  onIframeLoad(form: HTMLFormElement) {
    if (this.iframeInited) {
      this.showSuccess = true;
      form.reset();
    } else {
      this.iframeInited = true;
    }
  }

}
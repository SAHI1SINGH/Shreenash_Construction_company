import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSection } from './partner-section';

describe('PartnerSection', () => {
  let component: PartnerSection;
  let fixture: ComponentFixture<PartnerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerSection],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

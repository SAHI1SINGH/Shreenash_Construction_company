import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSection } from './process-section';

describe('ProcessSection', () => {
  let component: ProcessSection;
  let fixture: ComponentFixture<ProcessSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

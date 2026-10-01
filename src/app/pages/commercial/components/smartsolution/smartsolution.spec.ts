import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smartsolution } from './smartsolution';

describe('Smartsolution', () => {
  let component: Smartsolution;
  let fixture: ComponentFixture<Smartsolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smartsolution],
    }).compileComponents();

    fixture = TestBed.createComponent(Smartsolution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

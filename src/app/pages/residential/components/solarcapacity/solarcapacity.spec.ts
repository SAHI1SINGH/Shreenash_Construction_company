import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solarcapacity } from './solarcapacity';

describe('Solarcapacity', () => {
  let component: Solarcapacity;
  let fixture: ComponentFixture<Solarcapacity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solarcapacity],
    }).compileComponents();

    fixture = TestBed.createComponent(Solarcapacity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

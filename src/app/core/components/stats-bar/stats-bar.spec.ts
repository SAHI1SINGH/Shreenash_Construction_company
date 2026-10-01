import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBar } from './stats-bar';

describe('StatsBar', () => {
  let component: StatsBar;
  let fixture: ComponentFixture<StatsBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsBar],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechskillCard } from './techskill-card';

describe('TechskillCard', () => {
  let component: TechskillCard;
  let fixture: ComponentFixture<TechskillCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechskillCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TechskillCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

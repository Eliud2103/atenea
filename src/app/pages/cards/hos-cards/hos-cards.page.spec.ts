import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HosCardsPage } from './hos-cards.page';

describe('HosCardsPage', () => {
  let component: HosCardsPage;
  let fixture: ComponentFixture<HosCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HosCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

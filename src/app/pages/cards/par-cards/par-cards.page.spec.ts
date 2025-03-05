import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParCardsPage } from './par-cards.page';

describe('ParCardsPage', () => {
  let component: ParCardsPage;
  let fixture: ComponentFixture<ParCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

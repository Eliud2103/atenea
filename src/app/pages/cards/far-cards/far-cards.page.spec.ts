import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarCardsPage } from './far-cards.page';

describe('FarCardsPage', () => {
  let component: FarCardsPage;
  let fixture: ComponentFixture<FarCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

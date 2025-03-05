import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabCardsPage } from './lab-cards.page';

describe('LabCardsPage', () => {
  let component: LabCardsPage;
  let fixture: ComponentFixture<LabCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

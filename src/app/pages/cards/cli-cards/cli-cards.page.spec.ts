import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CliCardsPage } from './cli-cards.page';

describe('CliCardsPage', () => {
  let component: CliCardsPage;
  let fixture: ComponentFixture<CliCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CliCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

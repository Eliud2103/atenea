import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParRegister1Page } from './par-register1.page';

describe('ParRegister1Page', () => {
  let component: ParRegister1Page;
  let fixture: ComponentFixture<ParRegister1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParRegister1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

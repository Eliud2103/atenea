import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarRegister4Page } from './far-register4.page';

describe('FarRegister4Page', () => {
  let component: FarRegister4Page;
  let fixture: ComponentFixture<FarRegister4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarRegister4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

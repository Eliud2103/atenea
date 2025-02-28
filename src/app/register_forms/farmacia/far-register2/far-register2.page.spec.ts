import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarRegister2Page } from './far-register2.page';

describe('FarRegister2Page', () => {
  let component: FarRegister2Page;
  let fixture: ComponentFixture<FarRegister2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarRegister2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

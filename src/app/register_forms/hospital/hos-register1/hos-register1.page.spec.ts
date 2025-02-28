import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HosRegister1Page } from './hos-register1.page';

describe('HosRegister1Page', () => {
  let component: HosRegister1Page;
  let fixture: ComponentFixture<HosRegister1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HosRegister1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

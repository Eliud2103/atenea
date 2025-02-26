import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalRegister2Page } from './hospital-register2.page';

describe('HospitalRegister2Page', () => {
  let component: HospitalRegister2Page;
  let fixture: ComponentFixture<HospitalRegister2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalRegister2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

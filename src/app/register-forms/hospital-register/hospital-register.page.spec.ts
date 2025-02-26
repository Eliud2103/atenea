import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalRegisterPage } from './hospital-register.page';

describe('HospitalRegisterPage', () => {
  let component: HospitalRegisterPage;
  let fixture: ComponentFixture<HospitalRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

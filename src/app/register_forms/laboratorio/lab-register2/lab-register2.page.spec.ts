import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabRegister2Page } from './lab-register2.page';

describe('LabRegister2Page', () => {
  let component: LabRegister2Page;
  let fixture: ComponentFixture<LabRegister2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRegister2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabRegister1Page } from './lab-register1.page';

describe('LabRegister1Page', () => {
  let component: LabRegister1Page;
  let fixture: ComponentFixture<LabRegister1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRegister1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

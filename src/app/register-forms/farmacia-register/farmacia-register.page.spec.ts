import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmaciaRegisterPage } from './farmacia-register.page';

describe('FarmaciaRegisterPage', () => {
  let component: FarmaciaRegisterPage;
  let fixture: ComponentFixture<FarmaciaRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

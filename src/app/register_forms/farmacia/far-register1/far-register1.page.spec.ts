import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarRegister1Page } from './far-register1.page';

describe('FarRegister1Page', () => {
  let component: FarRegister1Page;
  let fixture: ComponentFixture<FarRegister1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarRegister1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

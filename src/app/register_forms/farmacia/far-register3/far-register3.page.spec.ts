import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarRegister3Page } from './far-register3.page';

describe('FarRegister3Page', () => {
  let component: FarRegister3Page;
  let fixture: ComponentFixture<FarRegister3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarRegister3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

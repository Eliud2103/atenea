import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CliRegister2Page } from './cli-register2.page';

describe('CliRegister2Page', () => {
  let component: CliRegister2Page;
  let fixture: ComponentFixture<CliRegister2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CliRegister2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

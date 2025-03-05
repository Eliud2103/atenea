import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CliRegister1Page } from './cli-register1.page';

describe('CliRegister1Page', () => {
  let component: CliRegister1Page;
  let fixture: ComponentFixture<CliRegister1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CliRegister1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

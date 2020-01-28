/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatomoComponent } from './matomo.component';

describe('MatomoComponent', () => {
  let component: MatomoComponent;
  let fixture: ComponentFixture<MatomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

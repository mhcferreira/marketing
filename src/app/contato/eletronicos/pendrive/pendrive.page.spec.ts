import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendrivePage } from './pendrive.page';

describe('PendrivePage', () => {
  let component: PendrivePage;
  let fixture: ComponentFixture<PendrivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendrivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendrivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

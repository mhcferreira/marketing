import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroseletronicosPage } from './outroseletronicos.page';

describe('OutroseletronicosPage', () => {
  let component: OutroseletronicosPage;
  let fixture: ComponentFixture<OutroseletronicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutroseletronicosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutroseletronicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularPage } from './celular.page';

describe('CelularPage', () => {
  let component: CelularPage;
  let fixture: ComponentFixture<CelularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

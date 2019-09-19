import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisaoPage } from './televisao.page';

describe('TelevisaoPage', () => {
  let component: TelevisaoPage;
  let fixture: ComponentFixture<TelevisaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

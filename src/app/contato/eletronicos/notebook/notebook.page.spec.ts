import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookPage } from './notebook.page';

describe('NotebookPage', () => {
  let component: NotebookPage;
  let fixture: ComponentFixture<NotebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

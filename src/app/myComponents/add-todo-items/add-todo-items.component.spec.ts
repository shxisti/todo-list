import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemsComponent } from './add-todo-items.component';

describe('AddTodoItemsComponent', () => {
  let component: AddTodoItemsComponent;
  let fixture: ComponentFixture<AddTodoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

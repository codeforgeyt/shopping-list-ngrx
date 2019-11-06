import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditModalComponent } from './shopping-edit-modal.component';

describe('ShoppingEditModalComponent', () => {
  let component: ShoppingEditModalComponent;
  let fixture: ComponentFixture<ShoppingEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAddModalComponent } from './shopping-add-modal.component';

describe('ShoppingAddModalComponent', () => {
  let component: ShoppingAddModalComponent;
  let fixture: ComponentFixture<ShoppingAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductocompletoComponent } from './productocompleto.component';

describe('ProductocompletoComponent', () => {
  let component: ProductocompletoComponent;
  let fixture: ComponentFixture<ProductocompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductocompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductocompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcategoriaComponent } from './listarcategoria.component';

describe('ListarcategoriaComponent', () => {
  let component: ListarcategoriaComponent;
  let fixture: ComponentFixture<ListarcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

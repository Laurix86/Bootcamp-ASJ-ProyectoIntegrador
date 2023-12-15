import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProveedoresComponent } from './display-proveedores.component';

describe('DisplayProveedoresComponent', () => {
  let component: DisplayProveedoresComponent;
  let fixture: ComponentFixture<DisplayProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayProveedoresComponent]
    });
    fixture = TestBed.createComponent(DisplayProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

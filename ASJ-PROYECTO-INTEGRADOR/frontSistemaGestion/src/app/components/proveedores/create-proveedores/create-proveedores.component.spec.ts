import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProveedoresComponent } from './create-proveedores.component';

describe('CreateProveedoresComponent', () => {
  let component: CreateProveedoresComponent;
  let fixture: ComponentFixture<CreateProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProveedoresComponent]
    });
    fixture = TestBed.createComponent(CreateProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosComponent } from './datos';

describe('Datos', () => {
  let component: DatosComponent;
  let fixture: ComponentFixture<DatosComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

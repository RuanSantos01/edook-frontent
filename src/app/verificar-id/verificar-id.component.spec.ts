import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarIdComponent } from './verificar-id.component';

describe('VerificarIdComponent', () => {
  let component: VerificarIdComponent;
  let fixture: ComponentFixture<VerificarIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginFinalComponent } from './tela-login-final.component';

describe('TelaLoginFinalComponent', () => {
  let component: TelaLoginFinalComponent;
  let fixture: ComponentFixture<TelaLoginFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaLoginFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaLoginFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

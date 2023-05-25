import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResponsavelComponent } from './cadastro-responsavel.component';

describe('CadastroResponsavelComponent', () => {
  let component: CadastroResponsavelComponent;
  let fixture: ComponentFixture<CadastroResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroResponsavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

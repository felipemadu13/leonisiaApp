import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosListagemComponent } from './servicos-listagem.component';

describe('ServicosListagemComponent', () => {
  let component: ServicosListagemComponent;
  let fixture: ComponentFixture<ServicosListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

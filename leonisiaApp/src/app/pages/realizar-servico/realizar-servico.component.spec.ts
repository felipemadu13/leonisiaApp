import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarServicoComponent } from './realizar-servico.component';

describe('RealizarServicoComponent', () => {
  let component: RealizarServicoComponent;
  let fixture: ComponentFixture<RealizarServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizarServicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

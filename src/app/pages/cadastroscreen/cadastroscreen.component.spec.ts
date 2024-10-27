import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroscreenComponent } from './cadastroscreen.component';

describe('CadastroscreenComponent', () => {
  let component: CadastroscreenComponent;
  let fixture: ComponentFixture<CadastroscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

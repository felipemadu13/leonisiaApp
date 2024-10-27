import { TestBed } from '@angular/core/testing';

import { ServicoService } from './services/servico.service';

describe('ServicoService', () => {
  let service: ServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

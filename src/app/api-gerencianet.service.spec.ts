import { TestBed } from '@angular/core/testing';

import { ApiGerencianetService } from './api-gerencianet.service';

describe('ApiGerencianetService', () => {
  let service: ApiGerencianetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGerencianetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

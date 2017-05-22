/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { EngineService } from './engine.service';

describe('EngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [EngineService]
    });
  });

  it('should create', inject([EngineService], (service: EngineService) => {
    expect(service).toBeTruthy();
  }));
});

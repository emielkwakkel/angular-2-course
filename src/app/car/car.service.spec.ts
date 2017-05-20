/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarService } from './car.service';
import { HttpModule } from "@angular/http";

describe('CarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CarService ],
      imports: [ HttpModule ]
    });
  });

  it('should ...', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngineDetailComponent } from './engine-detail.component';
import { EngineService } from "../engine.service";
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from "@angular/router/testing";
import { EngineStub } from "../engine.stub";

describe('EngineDetailComponent', () => {
  let component: EngineDetailComponent;
  let fixture: ComponentFixture<EngineDetailComponent>;
  let engineStub : EngineStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineDetailComponent ],
      imports: [ RouterTestingModule, HttpModule],
      providers: [ EngineService ]
    }).overrideComponent(EngineDetailComponent, {
      set: {
        providers: [
          { provide: EngineService, useClass: EngineStub },
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineDetailComponent);
    component = fixture.componentInstance;
    engineStub = fixture.debugElement.injector.get(EngineService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngineListComponent } from './engine-list.component';
import { RouterModule } from "@angular/router";
import { EngineService } from "../engine.service";
import { HttpModule } from "@angular/http";

describe('EngineListComponent', () => {
  let component: EngineListComponent;
  let fixture: ComponentFixture<EngineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, HttpModule ],
      declarations: [ EngineListComponent ],
      providers: [ EngineService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

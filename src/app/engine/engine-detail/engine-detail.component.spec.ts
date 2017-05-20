/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngineDetailComponent } from './engine-detail.component';
import { RouterModule } from "@angular/router";
import { EngineRoutes } from "../engine.routes";
import { EngineListComponent } from "../engine-list/engine-list.component";
import { APP_BASE_HREF } from "@angular/common";
import { EngineService } from "../engine.service";
import { HttpModule } from "@angular/http";

describe('EngineDetailComponent', () => {
  let component: EngineDetailComponent;
  let fixture: ComponentFixture<EngineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineDetailComponent, EngineListComponent ],
      imports: [ RouterModule, RouterModule.forRoot(EngineRoutes), HttpModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, EngineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

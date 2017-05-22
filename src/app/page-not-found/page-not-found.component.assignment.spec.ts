/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';

xdescribe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // TODO Add the PageNotFoundComponent to the declarations array.
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display the error message 'Page not found!'`, async(() => {
    // TODO Expect component message to equal 'Page not found!'
  }));

  it('should render the error message in a h2 tag', async(() => {
    const componentElement = fixture.debugElement.nativeElement;

    // TODO Use the querySelector('h2).textContent function to select the title in the expect
    expect().toContain(component.message);
  }));
});


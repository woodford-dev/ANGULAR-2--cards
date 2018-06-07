import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

// vars
let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('Component: AppComponent', () => {
  beforeEach( async(() => {
    // configure the TestBed module
    TestBed.configureTestingModule({
      declarations: [
        AppComponent // declare app component
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
    });
  }));
  // run the tests
  tests();
});

// Make sure the app module also passes test
import { AppModule } from './app.module';

describe('Module: AppComponent & AppModule', () => {
  // before each test
  beforeEach( async(() => {
    // configure the app module
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
    });
  }));
  // run the tests
  tests();
});

function tests() {
  // it can instantiate the component
  it('can instantiate it', () => {
    // component not to be null
    expect( comp ).not.toBeNull();
  });

 // it can instantiate the component
  it('should display the title', () => {
    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query( By.css('h1.title') );
    el = de.nativeElement;
    // detect changes to component
    fixture.detectChanges();
    // component title to be the text content
    expect( comp.title ).toBe( el.textContent );
    // change the title to something else
    comp.title = 'something else';
    // component title to be something else
    expect( comp.title ).toBe( 'something else' );
    // display has not updated yet
    expect( el.textContent ).not.toBe( 'something else' );
    // update the display
    fixture.detectChanges();
    // display should now have updated
    expect( el.textContent ).toBe( 'something else' );
  });
}

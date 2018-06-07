import { Component, ViewEncapsulation, OnInit  } from '@angular/core';

@Component({
  selector: 'ss-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public menuOpen: boolean = false;

  // store window size to manipulate menu
  private windowSize: Number;

  isMenuClosed( isOpen ) {
    // determine if at tablet breakpoint
    if ( this.windowSize >= 768) {
    // assign toggle for menu
      this.menuOpen = false;
    } else {
      // assign toggle for menu
      this.menuOpen = isOpen;
    }
  }

  ngOnInit() {
    // get initial window size
    this.windowSize = window.innerWidth;
    // set the logged in state
    localStorage.loggedIn = 1;
  }

  onResize(event) {
    // assign window size
    this.windowSize = event.target.innerWidth;
    // determine if at tablet breakpoint
    this.isMenuClosed( this.menuOpen );
  }
}

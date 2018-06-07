import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ss-my-account-menu',
  templateUrl: './my-account-menu.component.html',
  styleUrls: ['./my-account-menu.component.less']
})
export class MyAccountMenuComponent implements OnInit {

  myAccountMenuHasBeenOpened: boolean = false;

  @Input() collapse: string;
  @Input() menuTitle: string;
  @Input() menuUsername: string;

  @Output() isMenuClosed: EventEmitter<any> = new EventEmitter<any>();

  private userName: string;
  private user: any;
  private welcome: string;

  constructor( ) {
    this.user = ((<any>window).myAccount)
      ? (<any>window).myAccount
      : {'uid': 1, 'name': 'Harry Woodford', 'firstName': 'Harry', 'lastName': 'Woodford'};

    this.userName = this.user.firstName;
    this.welcome  = 'Good morning';
        let hours = new Date().getHours();
        if (hours > 11 && hours < 18) {
            this.welcome = 'Good afternoon';
        } else if (hours > 17) {
            this.welcome = 'Good evening';
        }
  }

  ngOnInit() {
  }

  collapseContentMenuisOpened( isOpen ) {
    this.myAccountMenuHasBeenOpened = isOpen;
    this.isMenuClosed.emit( isOpen );
  }

}

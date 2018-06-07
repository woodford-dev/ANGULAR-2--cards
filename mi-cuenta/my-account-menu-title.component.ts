import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ss-menu-title',
  templateUrl: './my-account-menu-title.component.html',
  styleUrls: ['./my-account-menu-title.component.less']
})
export class MyAccountMenuTitleComponent implements OnInit {

  @Input() collapse: string;
  @Input() menuTitle: string;
  @Input() menuUsername: string;

  public userName: string;
  public user: any;
  public welcome: string;

  constructor() {
    this.user = ((<any>window).myAccount)
      ? (<any>window).myAccount
      : {'uid': 1, 'name': 'John Doe', 'firstName': 'John', 'lastName': 'Doe'};
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

}

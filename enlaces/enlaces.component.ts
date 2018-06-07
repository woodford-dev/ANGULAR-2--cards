import { Component, OnInit, Input } from '@angular/core';

const myAccountLinks = [
    {link: 'enlaces1', href: '/my-account'},
    {link: 'enlaces2', href: '/my-account/my-orders'},
    {link: 'enlaces3', href: '/my-account/easypay'},
    {link: 'enlaces4', href: '/my-account/my-details'},
    {link: 'enlaces5', href: '/my-account/my-wallet'},
    {link: 'enlaces6', href: '/my-account/report-problem'},
    {link: 'enlaces7', href: '/user/logout'}
];

@Component({
  selector: 'menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.less']
})
export class MenuLinksComponent implements OnInit {

  @Input() collapse: string;

links = myAccountLinks;
  constructor() { }

  ngOnInit() {
  }

}

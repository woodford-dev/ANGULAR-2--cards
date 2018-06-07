import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carta-titulo',
  templateUrl: './carta-titulo.component.html',
  styleUrls: ['./carta-titulo.component.less']
})
export class CartaTituloComponent implements OnInit {
 @Input() title: string;
 @Input() icon: string;

  constructor() {

  }

  ngOnInit() {

  }

}

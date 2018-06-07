import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.less']
})
export class BotonComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() color: string;

  constructor() { }

  ngOnInit() { }
}

import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';


@Component({
  selector: 'derrumbe',
  templateUrl: './derrumbe.component.html',
  styleUrls: ['./derrumbe.component.less']
})
export class DerrumbeComponent implements OnInit {


  @Input() derrumbeChevron: string = 'fa-caret-down';
  @Output() isderrumbeOpened: EventEmitter<any> = new EventEmitter<any>();

  derrumbeOpened: Boolean = false;

    toggle ( event ) {
      event.stopPropagation();

      this.derrumbeOpened = !this.derrumbeOpened;
      this.isDerrumbeOpened.emit(this.derrumbeOpened);

    }


  constructor() {

   }

  ngOnInit() {

  }
}

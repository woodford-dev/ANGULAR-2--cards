import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ss-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  @Input() line: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() date: string;
  @Input() gap: string;
  @Input() iconBreak: string;

  constructor() { }

  ngOnInit() {
  }

}

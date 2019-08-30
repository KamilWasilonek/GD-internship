import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-title',
  templateUrl: './small-title.component.html',
  styleUrls: ['./small-title.component.scss'],
})
export class SmallTitleComponent implements OnInit {
  @Input() description: string;

  constructor() {}

  ngOnInit() {}
}

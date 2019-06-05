import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-page',
  template: `
        <h2>@ViewChild</h2>
        <app-parent-view></app-parent-view>
    `,
})
export class ViewChildPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

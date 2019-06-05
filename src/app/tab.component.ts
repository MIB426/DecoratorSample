import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
  <p [hidden]="!show">
      <ng-content></ng-content>
  </p>
`
})
export class TabComponent {
  @Input()
  tabTitle: string;

  show = false;

}

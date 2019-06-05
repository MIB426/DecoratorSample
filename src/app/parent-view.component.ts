import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';
@Component({
  selector: 'app-parent-view',
  template: `
  <div>Parent Component</div>
  <app-child></app-child>
`,
})
export class ParentViewComponent  implements AfterViewInit {
  @ViewChild(ChildComponent, {static: false})
  child: ChildComponent;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.child);
}

}

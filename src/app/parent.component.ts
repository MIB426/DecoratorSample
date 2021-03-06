import { Component, ContentChild } from '@angular/core';
import { ChildComponent } from './child.component';
@Component({
  selector: 'app-parent',
  template: `
  <div>Parent Component</div>
  <ng-content></ng-content>
  <p>{{child.name}}</p>
`
})
export class ParentComponent {
  @ContentChild(ChildComponent, {static: false})
  child: ChildComponent;

}

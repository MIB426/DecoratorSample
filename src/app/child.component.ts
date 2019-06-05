import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>Child Component</div>
`
})
export class ChildComponent {
  name = 'From childName';

}

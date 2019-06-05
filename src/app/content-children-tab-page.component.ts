import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-children-tab-page',
  template: `
  <h2>@ContentChildren-Tab</h2>
  <app-tabs>
      <app-tab tabTitle="First">
          <p>This Tab Content 1</p>
      </app-tab>
      <app-tab tabTitle="Second">
          <p>This Tab Content 2</p>
      </app-tab>
      <app-tab tabTitle="third">
          <p>This Tab Content 3</p>
      </app-tab>
  </app-tabs>
`
})
export class ContentChildrenTabPageComponent {


}

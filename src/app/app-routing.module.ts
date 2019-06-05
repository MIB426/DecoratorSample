import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentChildPageComponent } from './content-child-page.component';
import { ViewChildPageComponent } from './view-child-page.component';
import { ContentChildrenTabPageComponent } from './content-children-tab-page.component';
const routes: Routes = [
  {
    path: 'ContentChild',
    component: ContentChildPageComponent
  },
  {
    path: 'ViewChild',
    component: ViewChildPageComponent
  },
  {
    path: 'ContentChildrenTab',
    component: ContentChildrenTabPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

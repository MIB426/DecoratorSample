import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ContentChildPageComponent } from './content-child-page.component';
import { ViewChildPageComponent } from './view-child-page.component';
import { ParentViewComponent } from './parent-view.component';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { ContentChildrenTabPageComponent } from './content-children-tab-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ContentChildPageComponent,
    ViewChildPageComponent,
    ParentViewComponent,
    TabComponent,
    TabsComponent,
    ContentChildrenTabPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

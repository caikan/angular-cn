// #docplaster
// #docregion
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// #docregion override-default-options
import { HttpModule, JsonpModule, RequestOptions }  from '@angular/http';

// #enddocregion override-default-options
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
import { HeroData }                 from './hero-data';

import { AppComponent }             from './app.component';

import { HeroListComponent }        from './toh/hero-list.component';
import { HeroListPromiseComponent } from './toh/hero-list.component.promise';

import { WikiComponent }      from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    // #docregion in-mem-web-api
    InMemoryWebApiModule.forRoot(HeroData)
    // #enddocregion in-mem-web-api
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroListPromiseComponent,
    WikiComponent,
    WikiSmartComponent
  ],
  bootstrap: [ AppComponent ]
})
// #docregion override-default-request-options
export class AppModule {
  constructor(requestOptions: RequestOptions) {
    // Set the default 'Content-Type' header
    requestOptions.headers.set('Content-Type', 'application/json');
  }
}
// #enddocregion override-default-request-options




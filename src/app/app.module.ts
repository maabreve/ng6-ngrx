import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';

// store - app state management
import { reducers, metaReducers } from './store';
import { moviesReducer } from './movies/reducers/movies.reducers';
import { genericListReducer } from './generic-list/reducers/generic-list.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    StoreModule.forRoot(reducers, {metaReducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

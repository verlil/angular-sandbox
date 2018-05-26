import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventEmitterOutputComponent } from './event-emitter-output/event-emitter-output.component';

@NgModule({
  declarations: [
    AppComponent,
    EventEmitterOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

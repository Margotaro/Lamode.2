import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    SectionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

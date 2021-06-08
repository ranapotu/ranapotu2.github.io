import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './display/display.component';
import { DiaBoxComponent } from './dia-box/dia-box.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, DisplayComponent, DiaBoxComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

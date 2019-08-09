import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

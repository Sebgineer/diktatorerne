import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTestComponent } from './components/form-test/form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

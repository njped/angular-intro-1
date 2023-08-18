import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [ 
    AppComponent, 
    HelloComponent 
  ],
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MatCardModule,
    MatCheckboxModule 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

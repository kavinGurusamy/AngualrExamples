import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from  '@angular/material/button';
import { TodoComponent } from './todo/todo.component';
import {TodoModule} from './todo/todo/todo.module'; //importing the modules
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TodoModule, //importing the modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

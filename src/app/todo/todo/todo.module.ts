import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoListComponent], //exporting the modules to app modules
})
export class TodoModule { }

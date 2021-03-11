import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
//ngOnChanges, ngOnInit component life cycle hooks
export class TodoComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {}
}

import { ToDo } from './../../models/ToDo';
import { ToDOService } from './../../services/to-do.service';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  faTrash = faTrash;
  todos:ToDo[] = [];

  constructor(private _todoService: ToDOService) {}

  ngOnInit(): void {
    this._todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  changeTodoStatus(todo: ToDo): void {
    this._todoService.updateTodo(todo);
  }

  deleteTodo(todo: ToDo): void {
    this._todoService.removeTodo(todo);
  }

}

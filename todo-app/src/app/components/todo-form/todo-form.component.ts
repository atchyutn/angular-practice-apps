import { ToDOService } from './../../services/to-do.service';
import { ToDo } from './../../models/ToDo';
import { Component, OnInit } from '@angular/core';
import {v4 as uuid} from 'uuid';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string = '';
  todos: ToDo[] = [];

  constructor(private _todoService: ToDOService) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    const newToDo:ToDo = {
      id: uuid(),
      title: this.todoTitle,
      isDone: false,
      dueDate: new Date()
    };
    this._todoService.addTodo(newToDo);
    this.todoTitle = '';
  }

  updateTodo(todo: ToDo): void {
    this._todoService.updateTodo(todo);
  }

  deleteTodo(todo: ToDo): void {
    this._todoService.removeTodo(todo);
  }

}

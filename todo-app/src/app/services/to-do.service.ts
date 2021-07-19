import { Injectable } from '@angular/core';
import { ToDo } from '../models/ToDo';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToDOService {
  todos: ToDo[];
  constructor() {
    this.todos = [
      {id: 1, title: 'Buy milk', dueDate: new Date(), isDone: false},
      {id: 2, title: 'Read a book', dueDate: new Date(), isDone: false},
      {id: 3, title: 'Watch a movie', dueDate: new Date(), isDone: false}
    ];
  }


  getTodos(){
    return of(this.todos);
  }

  addTodo(todo: ToDo){
    this.todos.push(todo);
  }

  removeTodo(todo: ToDo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  updateTodo(todo: ToDo){
    this.todos = this.todos.map(t => t.id === todo.id ? todo : t);
  }
}
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { todo } from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: todo[];

  donetodos: todo[];

  constructor() {
    this.todos = [
      {
        id: "111",
        title: "Molly Moreas",
        subtitle: "Photo Shoot",
        level: "hard",
        date: new Date()
      },
      {
        id: "222",
        title: "Nike lebron",
        subtitle: "Landing Page",
        level: "low",
        date: new Date()
      },
      {
        id: "333",
        title: "BCA",
        subtitle: "Website Development",
        level: "medium",
        date: new Date()
      },
      {
        id: "444",
        title: "Plainthiing",
        level: "low",
        date: new Date()
      }
    ];

    this.donetodos = [
      {
        id: "111",
        title: "Pharmacy Illustration",
        subtitle: "Illustration",
        date: new Date()
      },
      {
        id: "222",
        title: "ESDM",
        subtitle: "Motion Graphic",
        date: new Date()
      },
      {
        id: "333",
        title: "Minerba",
        subtitle: "Motion Graphic",
        date: new Date()
      }
    ]
   }

   getTodos() {
     return of(this.todos);
   }

   getdoneTodos() {
     return of(this.donetodos);
   }

   addtodo(todo: todo) {
     this.todos.push(todo);
   }
}

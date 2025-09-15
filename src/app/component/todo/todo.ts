import { Component } from "@angular/core";

import { TodoContent } from "./todo-content/todo-content";
import { TodoFilter } from "./todo-filter/todo-filter";

@Component({
  selector: "app-todo",
  imports: [TodoFilter, TodoContent],
  templateUrl: "./todo.html",
  styleUrl: "./todo.scss",
})
export class Todo {}

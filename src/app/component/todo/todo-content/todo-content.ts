import { CommonModule, DatePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ToastrService } from "ngx-toastr";

import { Task, taskData } from "../../../shared/data/data/todo";

@Component({
  selector: "app-todo-content",
  imports: [FormsModule, CommonModule],
  providers: [DatePipe, ToastrService],
  templateUrl: "./todo-content.html",
  styleUrl: "./todo-content.scss",
})
export class TodoContent {
  private toast = inject(ToastrService);
  private datePipe = inject(DatePipe);

  public title: string;
  public tasks: string;
  public todoList = taskData;
  public textData: string = "";
  public isMove: boolean = false;
  public isOpen: boolean = false;
  public completed: boolean = false;

  isMoveData() {
    this.isMove = !this.isMove;
    if (this.isMove == true) {
      this.toast.success("All tasks", "marked as complete.");
    } else {
      this.toast.success("All tasks", "marked as Incomplete.");
    }
  }

  addTask() {
    let myDate = new Date();
    let formattedDate = this.datePipe.transform(myDate, "dd MMM");
    if (this.textData && formattedDate) {
      let someData = {
        text: this.textData,
        Date: formattedDate,
        priority: "Pending",
        badgeClass: "badge-light-danger",
        completed: false,
      };
      this.todoList.unshift(someData);
      this.toast.success(this.textData, "added to list");
    }
  }

  tastComplete(data: Task) {
    data.completed = !data.completed;
    if (data.completed) {
      this.toast.success(data.text, "marked as complete.");
    } else {
      this.toast.success(data.text, "marked as Incomplete.");
    }
  }

  taskDeleted(index: number, data: Task) {
    this.todoList.splice(index, 1);
    data.completed = !data.completed;
    if (data.completed) {
      this.toast.success(data.text, "has been deleted.");
    }
  }
}

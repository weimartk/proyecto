import { Component, OnInit } from '@angular/core';
import { TaskI } from  "../../models/task.interface";
import { TodoService} from "../../services/todo.service";
@Component({
  selector: 'app-dumbo',
  templateUrl: './dumbo.page.html',
  styleUrls: ['./dumbo.page.scss'],
})
export class DumboPage implements OnInit {
  todos: TaskI[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => this.todos = res);
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss'],
})
export class MytaskComponent implements OnInit {

  todo: any = [];
  donetodo: any = [];

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    this.todoservice.getTodos().subscribe((items: any) => {
      this.todo = items;
      console.log(this.todo);
    });

    this.todoservice.getdoneTodos().subscribe((items: any) => {
      this.donetodo = items;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}

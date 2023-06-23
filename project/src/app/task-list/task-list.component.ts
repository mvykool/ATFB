import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
      isDone = false;
      tasks = [
        { name: "buy stuff", isDone: false },
        { name: "learn angular", isDone: false },
        { name: "learn vue", isDone: false },
        { name: "create angular projects", isDone: false },
        { name: "practice more c#", isDone: false }
      ]

       //add tasks
      add(newTask: string) {
        this.tasks.push({ name: newTask, isDone: false });
      }

      //remove tasks
      remove(task: any) {
        this.tasks = this.tasks.filter(t => t !== task);
      }
      
      toggleDone(task: any) {
        task.isDone = !task.isDone;
      }

}

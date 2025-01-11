import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

export interface Task{
  id:number;
  task:string;
  status:boolean
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './todo.component.html',
  styles: ''
})
export class TodoComponent {
  taskList : Task [] = []
  task:string = ''
  disabled:boolean = false;

  addNewTask(){
    if(this.task.trim() !== ''){
      const newTask : Task = {
        id : Date.now(),
        task : this.task,
        status:false
      }
      this.taskList.push(newTask);
      console.log(this.taskList);
      this.task = '';
    }
  }

  complete(index:number){
    this.taskList[index].status = !this.taskList[index].status;
    console.log(this.taskList);
  }

}

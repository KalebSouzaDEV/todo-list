import { Component, OnInit } from '@angular/core';
import { ControlTaskService } from '../control-task.service';
import { task } from '../control-task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  tarefas: task[] = [];
  taskName = '';
  constructor(private task: ControlTaskService) { 
    this.tarefas = task.returnAllTasks();
  }

  ngOnInit(): void {
  }

  criarTarefa(){
    this.task.createTask(this.taskName, false);
    this.loadTasks()
  }

  loadTasks(){
    this.tarefas = this.task.returnAllTasks();
  }

  deletarTarefa(taskID: number){
    this.task.deleteTask(taskID)
    this.loadTasks()
  }

  completarTarefa(taskID: number){
    this.task.completeTask(taskID)
    this.loadTasks()
  }

}

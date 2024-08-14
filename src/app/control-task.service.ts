import { Injectable } from '@angular/core';

export interface task {
  name: string, 
  completed: boolean, 
  createdAt: Date,
  taskID: number,
}

let tasksList: task[] = [];

@Injectable({
  providedIn: 'root'
})

export class ControlTaskService {
  lastTaskID = 0;
  constructor() { 
    this.getTasksToStorage()
  }
  
  createTask(name: string, completed: boolean = false){
    this.lastTaskID++
    let newTask: task = {
      name: name, 
      completed: completed, 
      createdAt: new Date(),
      taskID: this.lastTaskID
    }
    tasksList.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(tasksList))
  }
  getTasksToStorage(){
    const storageTasks = localStorage.getItem("tasks")
    if (storageTasks) {
      tasksList = JSON.parse(storageTasks) as task[];
      const maxValueTaskID = tasksList.reduce((max, current) => {
        if (current.taskID > max.taskID) {
          return current
        } else {
          return max
        }
      })
      this.lastTaskID = maxValueTaskID.taskID;

      console.log('maior id', maxValueTaskID)
      
    }
  }
  returnAllTasks(){
    return tasksList
  }
  deleteTask(taskID: number){
    console.log(tasksList)
    let indexToDelete = tasksList.findIndex( (element, index) => {
      if (element.taskID === taskID) {
        return true
      }
      return false
    })
    tasksList.splice(indexToDelete, 1)
    localStorage.setItem("tasks", JSON.stringify(tasksList))
  }
  completeTask(taskID: number){
    let indexToModify = tasksList.findIndex( (element, index) => {
      if (element.taskID === taskID) {
        return true
      }
      return false
    })
    tasksList[indexToModify]['completed'] = !tasksList[indexToModify]['completed']
    localStorage.setItem("tasks", JSON.stringify(tasksList))
  }
}

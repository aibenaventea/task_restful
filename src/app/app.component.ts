import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task_restful';

  TitleTasks: String = '';
  TitleDetails: String = '';

  listOfTasks: any;
  createTask: any;
  editTask: any;
  qryTask: any;
  selectedTask:any;


  constructor(private _httpService: HttpService) {}

    ngOnInit(){
      this.createTask = { title: "", description: "", completed: true };
      this.editTask = [{ title: "", description: "", completed: true }];
    }

    onCreateTask(){
      let observable = this._httpService.createNewTask(this.createTask);
      observable.subscribe(data => {
        this.getTasksFromService()
      });
    }

    onEditTask(){
      const id = this.editTask._id
      this.editTask = this.qryTask[0];

      let observable = this._httpService.updateTask(id, this.editTask);
      observable.subscribe(data =>{
        this.getTasksFromService()
      })
    };

    getQueryTask(id: string) {
      let observable = this._httpService.getTaskById(id);
      observable.subscribe(data => {
        this.qryTask = data;
        // console.log("consulta id:", this.qryTask);
      });
    };
    showTask(task:any){
      // console.log('tarea enviada:' + task.title);
      this.selectedTask = task;
    };

    getTasksFromService() {
      let observable = this._httpService.getTasksAll();
      observable.subscribe(data => {
        // console.log("app.component:", data);
        this.listOfTasks = data;
        //console.log("app.component tasks:", this.listaTareas);
      });
      this.TitleTasks = 'List of Tasks';
    };

    onDeleteTask(id: string) {
      let observable = this._httpService.deleteTask(id);
      observable.subscribe(data => {
        //console.log("app.component tasks:", data);
        this.getTasksFromService();
      });
    }
}

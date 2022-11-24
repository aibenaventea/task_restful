import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  createTask: any

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this.createTask = {title:"",description:"", completed: true}
  }

  onCreateTask(){
    let observable = this._httpService.createNewTask(this.createTask);
    observable.subscribe(data => {

    });
  }
}

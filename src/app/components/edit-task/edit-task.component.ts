import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() taskToShow: any;
  editTask: any;
  formEdit: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this.editTask = [{_id:"", title:"", description:"", completed: true}];
  }

  onEditTask() {
    const id = this.editTask._id
    this.editTask = this.taskToShow;

    let observable = this._httpService.updateTask(id, this.editTask);
    observable.subscribe(data =>{
    })
  }
}

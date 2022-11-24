import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskById } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasksAll(){
    let url = environment.urlServiceGetAll
    return this._http.get(url)
  };
  getTaskById(id:String){
    let url = `${environment.urlServiceGetById}/${id}`
    return this._http.get<TaskById>(url)
  };
  createNewTask(jsonTask:any){
    let url = environment.urlServiceCreateNew
    return this._http.post(url,jsonTask)
  };
  updateTask(id:String, jsonTask: any){
    let url = `${environment.urlServiceUpdate}/${id}`
    return this._http.put(url,jsonTask)
  };
  deleteTask(id:String){
    let url = `${environment.urlServiceDelete}/${id}`
    return this._http.delete(url)
  };
}


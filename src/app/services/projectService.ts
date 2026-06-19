import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {
  urlApi = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}
  getProjectsGit(): Observable<any> {
    return this.http.get(`${this.urlApi}proyectos_github`);
  }

  getProjectsList(): Observable<any> {
    return this.http.get(`${this.urlApi}otras_experiencias`);
  }
}

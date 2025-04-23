import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private http = inject(HttpClient);

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/TicketsNew/";

  constructor() { }

  login(obj: any) {
    return this.http.post(this.apiUrl + "Login", obj);
  }

  getAllDepartments() {
    return this.http.get(`${this.apiUrl}GetDepartments`);
  }

  createNewDepartment(obj: any) {
    return this.http.post(`${this.apiUrl}CreateDepartment`, obj);
  }

  updateDeparment(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateDepartment`, obj);
  }

  deleteDepartmentById(id: number) {
    return this.http.get(`${this.apiUrl}DeleteDeparment?id=${id}`);
  }
}

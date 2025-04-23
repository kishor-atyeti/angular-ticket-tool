import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  masterService = inject(MasterService);
  router = inject(Router);

  departmentList: any[] = [];
  newDeptObj: any = {
    "deptId": 0,
    "deptName": "",
    "createdDate": new Date()
  };

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.masterService.getAllDepartments().subscribe({
      next: (res: any) => {
        this.departmentList = res.data;
      }
    })
  }

  saveDept() {
    this.masterService.createNewDepartment(this.newDeptObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.resetDeptObject();
          alert("Department created successfully.");
          this.getDepartments();
        } else {
          alert(res.message);
        }
      }
    })
  }

  resetDeptObject() {
    this.newDeptObj = {
      "deptId": 0,
      "deptName": "",
      "createdDate": new Date()
    };
  }

  onEdit(data: any) {
    this.newDeptObj = data;
    console.log(this.newDeptObj);
  }

  updateDept() {
    this.masterService.updateDeparment(this.newDeptObj).subscribe({
      next: (res: any) => {
        this.resetDeptObject();
        alert("Department updated successfully.");
        this.getDepartments();
      }
    })
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { ChildCategoryComponent } from './pages/child-category/child-category.component';
import { ParentCategoryComponent } from './pages/parent-category/parent-category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DepartmentComponent,
    EmployeeComponent,
    TicketListComponent,
    NewTicketComponent,
    ChildCategoryComponent,
    ParentCategoryComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/common.model';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  masterService = inject(MasterService);
  router = inject(Router);

  loginObj: any = {
    "emailId": "",
    "password": ""
  };

  userObj: IUser | null = null;

  onLogin() {
    console.log(this.loginObj);
    this.masterService.login(this.loginObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.userObj = this.pluckKeys(res.data);
          localStorage.setItem('ticketUser', JSON.stringify(this.userObj));
          this.router.navigate(['dashboard']);
        } else {
          console.log("Login failed");
          alert('Login failed due to wrong credentials.');
        }
      }
    });
  }

  pluckKeys(data: any): IUser {
    const user: IUser = {
      emailId : data.emailId,
      employeeId: data.employeeId,
      employeeName: data.employeeName
    }
    return user;
  }

}

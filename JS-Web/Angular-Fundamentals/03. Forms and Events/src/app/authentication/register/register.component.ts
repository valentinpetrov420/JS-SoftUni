import { Component } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  public model: RegisterModel;
  public errMessage: string;
  public loginFailed: boolean;

  constructor(
    private authService: AuthService
  ) {
    this.model = new RegisterModel('', '', '', '', '');
  }

  register(): void {
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.successfulRegister(data);
        },
        err => {
          this.errMessage = err;
        }
      );
  }

  successfulRegister(data): void {
    localStorage.setItem('username', data['username']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateuserService } from '../createuser/createuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password: string = '';
    
  constructor(private login: CreateuserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {

    this.login.login(this.email, this.password).subscribe(() => {
      this.login.showMessage('operação executada com sucesso');
      this.router.navigate(['/products']);
    })

  }

}

import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { UserInfos } from '../../models/UserInfos';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  private emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  private logedInUser: string [];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["",[Validators.required, Validators.pattern(this.emailRegex)]],
      password: ["",[Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(form){

    let email: string = form.value.email;
    let password: string = form.value.password;
    this.usersService.loginUser(email, password);
    //let value = this.usersService.getUserInfosFromDb();
    //console.log('3 : ' + value);
  }






}

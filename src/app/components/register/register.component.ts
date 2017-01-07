import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from '../../services/users.service';

import { UserInfos } from '../../models/UserInfos';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  private emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  private registerdUser: UserInfos;
  private allUsers: UserInfos [];
  private isRegisterd: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: ["",[Validators.required, Validators.minLength(3)]],
      lastname: ["",[Validators.required, Validators.minLength(3)]],
      email: ["",[Validators.required, Validators.pattern(this.emailRegex)]],
      password: ["",[Validators.required, Validators.minLength(8)]]
      // passwords: this.formBuilder.group({
      //   password: ["",Validators.required],
      //   repeatPassword: ["",Validators.required]
      // }, {validator: this.areEqual})
    });
    // this.form = new FormGroup({
    //   firstname: new FormControl("",[Validators.required, Validators.minLength(3)]),
    //   lastname: new FormControl("",[Validators.required, Validators.minLength(3)]),
    //   email: new FormControl("",[Validators.required]),
    //
    //   passwords: new FormGroup({
    //     password: new FormControl("",[Validators.required]),
    //     repeatPassword: new FormControl("",[Validators.required])
    //   })
    // })
  }

  //NgModule
  private onSubmit(form) {

    let firstname: string = form.value.firstname;
    let lastname: string = form.value.lastname;
    let email: string = form.value.email;
    let password: string = form.value.password;

    //this.registerdUser = new UserInfos(firstname,lastname,email,password);
    this.usersService.registerUser(firstname, lastname, email, password);
    this.isRegisterd = true;
  }

  private areEqual(group: FormGroup): boolean {

    let val: boolean = false;
    console.log(group);
    console.log(group.value.password);
    console.log(group.value.repeatPassword);
    //console.log(group.value.passwords.errors.areEqual);

    if (group.value.password !== "" || group.value.repeatPassword !== "") {
      if (group.value.password === group.value.repeatPassword) {
        console.log("true1");
          val = true;
      }
    }
    return val;
  }

}

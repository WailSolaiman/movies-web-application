import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  private emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  // form = new FormGroup({
  //   firstname: new FormControl("",[Validators.required, Validators.minLength(3)]),
  //   lastname: new FormControl("",[Validators.required, Validators.minLength(3)]),
  //   email: new FormControl("",[Validators.required]),
  //   password: new FormControl("",[Validators.required]),
  //   repeatPassword: new FormControl("",[Validators.required])
  // })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: ["",[Validators.required, Validators.minLength(3)]],
      lastname: ["",[Validators.required, Validators.minLength(3)]],
      email: ["",[Validators.required, Validators.pattern(this.emailRegex)]],
      password: ["",[Validators.required, Validators.minLength(8)]],
      repeatPassword: ["",[Validators.required, Validators.minLength(8)]]
    })
  }

  //NgModule
  // private onSubmit(form) {
  //   console.log(form);
  //   console.log(form.value.email);
  // }

}

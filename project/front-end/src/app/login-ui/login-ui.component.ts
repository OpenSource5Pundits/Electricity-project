import { Component, OnInit } from '@angular/core';
import { CREDENTIALS } from '../credentials';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.css']
})
export class LoginUiComponent implements OnInit {

  isConfirmed: boolean=false;
  msg: string="";
  public myForm!: FormGroup;

  ngOnInit(): void {
  }

  get uname()
  {
    return this.myForm.get('uname');
  }

  get pass()
  {
    return this.myForm.get('pass');
  }

  user!: User;
  constructor(private router: Router) { 
    this.user = new User("", "");
    this.createForm();
  }

  createForm() {
    this.myForm=new FormGroup({
      uname: new FormControl(null, [Validators.required]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(55)])
    });
  }

  mySubmit(): void
  {
    this.msg="";
    this.user.username=this.uname?.value;
    this.user.username=this.user.username.trim();
    let i = CREDENTIALS.find((x)=>{return x.username===this.uname?.value});
    let j = CREDENTIALS.find((x)=>{return x.password===this.pass?.value});
   if(i?.username===j?.username) {
     if(i?.password===j?.password) {
      this.router.navigate(['/showCustomer']);
     } else {
       this.msg="Incorrect Password"
     }
   } else {
     this.msg="Incorrect Username or Password"
   }
  }
}

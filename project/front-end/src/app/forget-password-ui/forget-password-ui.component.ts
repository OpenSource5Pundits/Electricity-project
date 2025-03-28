import { Component, OnInit } from '@angular/core';
import { CREDENTIALS } from '../credentials';
import { User } from '../model/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password-ui',
  templateUrl: './forget-password-ui.component.html',
  styleUrls: ['./forget-password-ui.component.css']
})
export class ForgetPasswordUiComponent implements OnInit {


  isConfirmed: boolean=false;
  msg: string="";
  public myForm!: FormGroup;

user!: User;
  constructor(private router: Router) { 
    this.user = new User("", "");
    this.createForm();
  }

  ngOnInit(): void {
  }

  
  createForm() {
    this.myForm=new FormGroup({
      uname: new FormControl(null, [Validators.required]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(55)]),
      cpass: new FormControl(null, [Validators.required])
    });
  }
  mySubmit(): void
  {
    this.msg="";
    //alert("in my submit()");
    this.user.username=this.uname?.value;
    this.user.username=this.user.username.trim();
    let i = CREDENTIALS.findIndex((x:any)=>{return x.username===this.uname!.value});
   console.log("i is"+i);
   if(this.pass!.value===this.cpass!.value){
      if(i>=0){
        CREDENTIALS[i].password=this.pass!.value;
        console.log(CREDENTIALS[i].password);
        alert("Password changed successfully");
        this.router.navigate(['/home']);
      }
    } else{
      this.msg = "Passwords do not match"
      console.log(this.msg.valueOf);
    }
  }

  myReset()
  {
    this.toggleConfirmed()
  }
  toggleConfirmed()
  {
    if(this.myForm.valid)
    {
      this.isConfirmed=!this.isConfirmed;
    }
  }

  foo() {
   
  }

  get uname()
  {
    return this.myForm.get('uname');
  }

  get pass()
  {
    return this.myForm.get('pass');
  }

  get cpass()
  {
    return this.myForm.get('cpass');
  }

foo3() {
  console.log(this.cpass?.value);
}

foo2() {
  console.log(this.pass?.value)
}

}

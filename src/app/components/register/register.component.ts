import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm:FormGroup;
  public submitted: boolean=false;

  constructor(private formBuilder:FormBuilder) {
    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lasttName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      state:['',Validators.required],
      zipcode:['',Validators.required],
      agree:['',Validators.required]
      
    })
   }

  

  ngOnInit(): void {
  }

}

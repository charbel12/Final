import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})


export class ContactUsPage {
  constructor(private FormBuilder: FormBuilder,private  router:  Router) {
    
  }

  hide = true;

  get email(){
    return this.resignationForm.get('email');
  }

  resignationForm=this.FormBuilder.group({
    email:['',[Validators.required,Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")]],
    password: ['', Validators.required,Validators.maxLength(40)],
  });


  public submit(){
    console.log(this.resignationForm.value)
  }

  public errorMessages = {
    email:[
      {type:'required', message:'phone number is required'},
      {type: 'pattern', message: 'Please enter a valid email adress'}
    ],

    password:[
      {}
    ]

  }

}

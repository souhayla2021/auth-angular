import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormControl } from '@angular/forms';
declare var $: any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import {TalkService} from '../talk.service'
import {ChatbotService} from 'src/app/chatbot.service'
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  reactiveForm: FormGroup;
  user: SocialUser;
  isSignedin: boolean; 
  name: any;
  password: any;
  c_password: any;
  auth_token: any;
  email: any;
  form: FormGroup;
  
  constructor(private fb: FormBuilder,
     private socialAuthService: SocialAuthService,
     private apiService: ApiServiceService,
     private route: ActivatedRoute,
     private router: Router,
     private chatbotService :ChatbotService,
    ) { }

  ngOnInit(): void {


    $(function() {
 
      $('#login-form-link').click(function(e) {
      $("#login-form").delay(100).fadeIn(100);
       $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
      $("#register-form").delay(100).fadeIn(100);
       $("#login-form").fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
  });

    this.reactiveForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });   
    
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });

  
  }
  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngAfterContentInit()
{
  this.chatbotService .f_TAWKTO_manage()
}

  logout(): void {
    this.socialAuthService.signOut();
  }

  /*login() {
    let data = {
      "password" : this.password,
      "email" : this.email
    }
    console.log(data)
    this.apiService.postData("login", data).then(result => {
          this.auth_token = result['success']['token'];
          localStorage.setItem("auth_token", this.auth_token);
          this.apiService.getToken(this.auth_token); 
          this.router.navigateByUrl('index');
          this.talkService.createCurrentSession();
        },
        error => {
          console.error("error creating");
        }
    );
  }*/


  login() {
    let data = {
      "password" : this.password,
      "email" : this.email
    }
    console.log(data)
    this.apiService.postData("login", data)
    .subscribe(
        result => {
          this.auth_token = result['success']['token'];
          localStorage.setItem("auth_token", this.auth_token);
          this.apiService.getToken(this.auth_token); 
          this.router.navigateByUrl('index');
        },
        error => {
          console.error("error creating");
        }
    );
  }


 
  register() {
    /*console.log("registred button !");

    let data = {
      "name" : this.name,
      "email" : this.email,
      "password" : this.password,
      "c_password" : this.c_password
    }
    console.log(data);
    this.apiService.postData("register",data).subscribe(
      result => {
        this.auth_token = result['success']['token'];
        localStorage.setItem("auth_token", this.auth_token);
        this.apiService.getToken(this.auth_token); 
        this.router.navigateByUrl('login');
      },
      error => {
        console.error("error creating");
      });*/
    }
 

}

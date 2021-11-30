import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

//social
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialComponent } from './social/social.component';

//chat
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TalkService } from 'src/app/talk.service';
import Talk from 'talkjs';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'social', component: SocialComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'Google-Client-ID'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { TalkService } from 'src/app/talk.service';
import Talk from 'talkjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-angular';
  private inbox: Talk.Inbox;
  private session: Talk.Session;
}


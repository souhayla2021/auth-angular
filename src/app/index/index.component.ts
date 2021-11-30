import { Component } from '@angular/core';
import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { TalkService } from 'src/app/talk.service';
import Talk from 'talkjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private inbox: Talk.Inbox;
  private session: Talk.Session;
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  constructor(private talkService: TalkService) {}
  ngOnInit() {
    this.createInbox();
  }

 
  /* private async createInbox() {
    this.inbox = await this.talkService.createInbox();
    this.inbox.mount(document.getElementById('talkjs-container'));
      
    this.talkService.destroyAllLoadedPopups();
  }*/

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
  }
  

}

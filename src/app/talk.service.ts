import { Injectable } from '@angular/core';
import Talk from 'talkjs';
import {User} from '../app/user'
import { ApiServiceService } from '../app/api-service.service';
//import { Deferred } from "../app/utils/deffered.util";

@Injectable({
  providedIn: 'root'
})

export class TalkService {
  private currentUser: Talk.User;
  private static APP_ID = 'YOUR APP ID HERE';
  private currentTalkUser: Talk.User;
  private loadedPopups: Talk.Popup[];
  //private currentSessionDeferred = new Deferred<Talk.Session>();


  constructor(private apiService: ApiServiceService) { 
    this.loadedPopups = [];
  }

  async createUser(applicationUser: User) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.name,
      photoUrl: applicationUser.photoUrl,
      role: applicationUser.role
    });
  }



 /* async createCurrentSession() {
    await Talk.ready;
    const currentUser = await this.apiService.getCurrentUser();
    const currentTalkUser = await this.createTalkUser(currentUser);
   
    const session = new Talk.Session({
         appId: 'tNNBJz6N',
         me: this.currentTalkUser
    });
    this.currentTalkUser = currentTalkUser;
    this.currentSessionDeferred.resolve(session);
  }*/

  async createCurrentSession() {
    await Talk.ready;
    const user = {
      id: 1,
      name: 'souhaila',
      email: 'souhaila@gmail.com',
      photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
      welcomeMessage: 'Hey there! How are you? :-)',
      role: 'default'
    };
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
         appId: 'tNNBJz6N',
         me: this.currentUser
    });
    return session;
  }


  async createInbox(session: Talk.Session) {
    const otherApplicationUser = {
      id: 5,
      name: 'asma',
      email: 'asma@gmail.com',
      photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
      welcomeMessage: 'Hey, how can I help?',
      role: 'default'
    };

    const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
    return session.createInbox({selected: conversation});
 }

 /* async createTalkUser(applicationUser: User) : Promise<Talk.User> {
    await Talk.ready;

    return new Talk.User({
        id: 'talkjs_angular6_marketplace_end_product' + applicationUser.id,
        name: applicationUser.name,
        photoUrl: applicationUser.photoUrl,
        configuration: "demo_default",
        welcomeMessage: applicationUser.chatPreferences.chatWelcomeMessage
     });
}*/



  private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
    const otherUser = await this.createUser(otherApplicationUser);
    const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
    conversation.setParticipant(this.currentUser);
    conversation.setParticipant(otherUser);
    return conversation;
  }


  /*async createInbox() : Promise<Talk.Inbox> {
    const session = await this.currentSessionDeferred.promise;

    return session.createInbox();
  }*/

    destroyAllLoadedPopups() {
        if (this.loadedPopups.length > 0) {
            this.loadedPopups.forEach(p => p.destroy());
            this.loadedPopups = [];
        }
    }

}
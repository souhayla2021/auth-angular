//import { ChatPreferences } from "./chat-preferences.model";

export class  User {
    id: number;
    name: string;
    email: string;
    password?: string;
    c_password?:string;
    photoUrl?: string; 
    welcomeMessage?: string; 
    role?: string;
    configuration?:string;
   // chatPreferences?: ChatPreferences;

    
    /*constructor(id: number, name: string, photoUrl: string, chatPreferences: ChatPreferences) {
        this.id = id;
        this.name = name;
        this.photoUrl = photoUrl;
        this.chatPreferences = chatPreferences;

    }*/


}





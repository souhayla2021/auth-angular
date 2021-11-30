import { Injectable } from '@angular/core';
declare var Tawk_API:any;
declare var TAWK_TO_LOAD:any;

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }
    /**@f_TAWKTO_manage Hide / Show TackTo With */
    f_TAWKTO_manage(){
      if(!Tawk_API){ console.log('Window TawkTo API NOT_EXIST  ...'); return; }
   
      var this_ = this; 
      if(!TAWK_TO_LOAD)
      {
        Tawk_API.onLoad =  function(){ TAWK_TO_LOAD++; this_.f_TAWKTO_showhide();  };
      } else {
        this_.f_TAWKTO_showhide();
      }
    }
    /**@f_TAWKTO_showhide Show Hide Widget  */
    f_TAWKTO_showhide(){
      var hidden_on_pages = ['social'];  // This Variable contains components where i would like to hide TAWK TO Widget 
  
     // Get Component Path
      var p = location.pathname.slice(1);  
      var p_arr = p.split('/');
      if( p_arr.length >=3 ){   p = (p_arr[0] +'/' + p_arr[1]);} 
      else if(p_arr.length  <= 2){    p = p_arr[0];   } 
  
      if(hidden_on_pages.indexOf(p) != -1)  
      {
        console.log('Hidding TAWK_TO  ...');
        Tawk_API.hideWidget();
        return;
      }
      console.log('Showing TAWK_TO  ...');
      Tawk_API.showWidget();    
    }
  
}





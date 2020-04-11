import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickButton =  'click this button';

  title = 'Click me';
  result = 'a';
  val1 = 'a'
  count = 0;

     username:string = ''; 
     msg = "I'm clicked " + this.count +" times";
       callFunction(){
         
          this.result = 'name';
       }

        clickEvent(){  
                        this.count = this.count + 1;
                        this.msg = "I'm cliked " + this.count + " times"
         }    
}

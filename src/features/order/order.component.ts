import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent{
  currentTab!:string 
  
  constructor(){
    this.currentTab= "recent"

  }

  
  tab_switch(btn:HTMLButtonElement){
    switch(btn.id)
    {
      case "btnp":
        this.currentTab="recent";
        break;
      default:
        this.currentTab="past"
        break;
    }
  }
  
}

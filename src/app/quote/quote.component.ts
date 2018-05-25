import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'It is only a fool who tests the depth of water with both feet','Hey Anilla',new Date(20,8,18)),
      new Quote(2,'Buy Cookies','Hey Anilla',new Date(20,8,18)),
      new Quote(3, 'Get new Phone Case','Hey Anilla',new Date(20,8,18)),
      new Quote(4, 'Get Dog Food','Hey Anilla',new Date(20,8,18)),
      new Quote(5, 'Solve math homework','Hey Anilla',new Date(20,8,18)),
      new Quote(6, 'Plot my world domination plan','Hey Anilla',new Date(20,8,18)),

  ]
  quoteComplete(isComplete,index){
       if (isComplete){
           this.quotes.splice(index,1);
           }
           }

  toogleDetails(index){
       this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }


  addNewGoal(goal){
        let quoteLength = this.quote.length;
        quote.id=goalLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }
}
constructor() { }

ngOnInit() {
}

import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'It is only a fool who tests the depth of water with both feet','African Proverb',new Date(20,8,18)),
      new Quote(2,'The two most important days in your life are the day you are born and the day you find out why','Mark Twain',new Date(20,8,18)),
      new Quote(3, 'We are all in the gutter, but some of us are looking at the stars','Oscar Wilde',new Date(20,8,18)),
      new Quote(4, 'ream as if you will live forever. Live as if you will die today.','James Dean',new Date(20,8,18)),
      new Quote(5, 'If a man can bridge the gap between life and death, if he can live on after he is dead, then maybe he was a great man.','Hey Anilla',new Date(20,8,18)),
      new Quote(6, 'Government of the people, by the people, for the people, shall not perish from the Earth.','Abraham Lincon',new Date(20,8,18)),

  ]
  quoteComplete(isComplete,index){
       if (isComplete){
           this.quotes.splice(index,1);
           }
           }

  toogleDetails(index){
       this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }


  addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }
    ngOnInit() {
    }
}
// constructor() { }
//

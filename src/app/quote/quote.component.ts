import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, '1st quote, ', '"The greatest want of the world is the want of men, men who cannot be bought or sold, men who call sin by its rightful name, men who are true as the needle is to the pole." (Ellen G White)', new Date(2018,3,12)),
    new Quote(2, '2nd quote, ', '“Science investigates; religion interprets. Science gives man knowledge, which is power; religion gives man wisdom, which is control. Science deals mainly with facts; religion deals mainly with values. The two are not rivals." (Martin Luther King Jr.)', new Date(2018,4,14))
    // new Quote(3, 'Man is a social being', 'And he was created to glorify God', new Date(2018,5,16)),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
    
  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}
  // }

  // constructor() {};

  ngOnInit() {    
          }

        }

    




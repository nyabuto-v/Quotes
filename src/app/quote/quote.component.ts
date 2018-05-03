import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Today is a good day', 'More understanding and less pressure', new Date(2018,3,12)),
    // new Quote(2, 'We shall meet some day', 'Where there shall be no more pain', new Date(2018,4,14)),
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

  constructor() {};

  ngOnInit() {    
          }

        }

    




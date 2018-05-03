import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
    quotes = [
      new Quote(1, 'Today is a good day', 'More understanding and less pressure', new Date(2018,3,12)),
      new Quote(2, 'We shall meet some day', 'Where there shall be no more pain',new Date(2018,4,14)),
      new Quote(3, 'Man is a social being', 'And he was created to glorify God', new Date(2018,5,16)),
    ]

    deleteQuote(isComplete,index){
      if(isComplete){
        let toDelete=confirm('Are you sure you want to delete ${this.quote[index].name}')

        if(toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
  }


import { Component } from '@angular/core';
import arrayWords from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  limit = 10;
  words = '';

  handleSlider(event: any){
    let newLimit = (<HTMLInputElement>event.target).value;
    this.limit = parseInt(newLimit);
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}

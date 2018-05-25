import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
        new Quote(1,'It is only a fool who tests the depth of water with both feet'),
        new Quote(2,'Buy Cookies',new Date(20/8/18)),
        new Quote(3, 'Get new Phone Case',new Date(20/8/18)),
        new Quote(4, 'Get Dog Food',new Date(20/8/18)),
        new Quote(5, 'Solve math homework',new Date(20/8/18)),
        new Quote(6, 'Plot my world domination plan',new Date(20/8/18)),

    ]
}

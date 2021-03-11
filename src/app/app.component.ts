import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first';
  showMsg = true;
  colorName = 'green';
  ifMsg = true;
  swithvalue = 3;
  contacts = [
    {
      firstName: 'ABC',
      lastName: 'DEF',
    },
    {
      firstName: 'GHI',
      lastName: 'JKL',
    },
    {
      firstName: 'MNO',
      lastName: 'PQR',
    },
  ];
  StyleColor = 'yellow'; //dynamic color changing
  colorFromCss = 'c2'; //css class name from css
  userObject = { firstname: 'Kavin', lastname: 'G' };
  colVal = 2;
  SayHello() {
    console.log('hello from app.component.html');
  }
  highLightByColor() {
    console.log('High lighted');
  }
  username = '';
}

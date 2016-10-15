/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';

require('../styles/notification.styl');

class Notification {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  display():void {
    console.log('Notification displayed with text ' + this.text);
    document.body.innerHTML += `
      <div class='notification'>
        ${this.text}
       </diV>
    `;
    
  }
}

export default Notification;

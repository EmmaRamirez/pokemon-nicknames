"use strict";
require('../styles/notification.styl');
var Notification = (function () {
    function Notification(text) {
        this.text = text;
    }
    Notification.prototype.display = function () {
        console.log('Notification displayed with text ' + this.text);
        document.body.innerHTML += "\n      <div class='notification'>\n        " + this.text + "\n       </diV>\n    ";
    };
    return Notification;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Notification;

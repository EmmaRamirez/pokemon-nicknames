import { Component, OnInit, Input } from '@angular/core';
import { Nickname } from '../nickname';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent {
  @Input() description: Nickname['description'];
  @Input() name: Nickname['name'];
  @Input() public upvotes: Nickname['upvotes'];
  @Input() public downvotes: Nickname['downvotes'];

}

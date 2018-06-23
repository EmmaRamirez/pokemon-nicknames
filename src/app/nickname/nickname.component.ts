import { Component, OnInit, Input } from '@angular/core';
import { Nickname } from '../nickname';
import { Pokemon } from '../pokemon';
import { VoteService } from '../vote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.scss']
})
export class NicknameComponent {
  @Input() public description: Nickname['description'];
  @Input() public name: Nickname['name'];
  @Input() public upvotes: Nickname['upvotes'];
  @Input() public downvotes: Nickname['downvotes'];
  @Input() public id: Pokemon['id'];
  @Input() public tags: Nickname['tags'];

  constructor(private voteService: VoteService) {

  }

  upVote() {

  }

  downVote() {

  }
}

import { Component, OnInit } from '@angular/core';

enum Options {
  dexNo = 'dexNo',
  numOfNicknames = 'numOfNicknames',
  speciesName = 'speciesName',
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  selected = Options.dexNo;

  constructor() { }

  ngOnInit() {
  }

}

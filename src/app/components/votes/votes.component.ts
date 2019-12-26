import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {


  @Input('my-like') like: number = 0;
  @Input('my-dislike') disLike: number = 0;

  @Output('incVote') incVotefromChildToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.incVotefromChildToParent.emit({type: 1, value: this.like});
  }

  incDisLike() {
    this.disLike++;
    this.incVotefromChildToParent.emit({type: 0, value: this.disLike});

  }

}

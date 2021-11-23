import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
// import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() content: any;

  constructor() {

  }

  onImageClick(id: number) {
    console.log(`Image with id: ${id} is clicked`);
  }
  ngOnInit(): void {}

}

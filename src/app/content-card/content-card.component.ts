import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
// import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  // contentList: ContentList = new ContentList();

  // constructor() {
  //   this.contentList.addContent({
  //     id: 32,
  //     author: "Yash",
  //     title: "Angular",
  //     body: "This is my first assingment of Angular",
  //     imgUrl: "https://ykumar.scweb.ca/images/profile-1.jpeg",
  //   });
  // }
  // @Input() content: Content;
  @Input() content: any;

  constructor() {

  }

  onImageClick(id: number) {
    console.log(`Image with id: ${id} is clicked`);
  }
  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.addContent({
      id: 32,
      author: "Yash",
      title: "Angular",
      body: "This is my first assingment of Angular",
      imgUrl: "https://ykumar.scweb.ca/images/profile-1.jpeg",
    });
  }

  ngOnInit(): void {
  }

}

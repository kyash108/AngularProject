import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() createContentEvent = new EventEmitter<Content>();

  addContent:Content;
  error?: string;
  onAddNews(
      title: string,
      author: string,
      body: string,
      type: string,
      imgUrl: string,
      tags: string
  ) {

    this.addContent = {
      id: 0,
      author: author,
      title: title,
      body: body,
      type: type,
      imgUrl: imgUrl,
      tags: [tags],
    };

    let promiseToAddNews = new Promise((success, fail) => {
      if (body && title && author) {
        this.error = undefined;
        this.createContentEvent.emit(this.addContent);
        success(`Content Added! - ${this.addContent.title}`);
      } else {
        this.error = `You need to enter the data in required fields: ${
            title ? '' : 'Title'
        } ${body ? '' : 'Body'} ${author ? '' : 'Author'}`;
        fail(this.error);
      }
    });

    promiseToAddNews
        .then((successMessage) => console.log(successMessage))
        .catch((failMessage) => console.log(failMessage));
  }
  constructor() { }

  ngOnInit(): void {
  }
}

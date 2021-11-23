import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentList!: Content[];

  addContentToList(newContentFromChild: Content): void {
    this.contentList.push(newContentFromChild);
    // We need to clone the array for the pipe to work
    this.contentList = Object.assign([], this.contentList);
  }

  updateContentInList(response: string) {
    console.log(response);
    this.getContentList();
  }

  getContentList() {
    this.contentService.getContentsObs().subscribe((content) => {
      this.contentList = content;
    });
  }


  searchContentCard(search: String): void {
    let found = this.contentList.find(content => content.title.toLowerCase() == search.toLowerCase());
    console.log(found ? `${search} exist in the list!` : `${search} does not exist in the list!`);
  }

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getContentList();

  }
}


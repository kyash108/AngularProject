import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private messageService: MessageService) { }
  getContents(): Content[] {
    return contentList;
  }
  getContentsObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(contentList);
  }
}

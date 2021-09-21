import { Content } from './../helper-files/content-interface';

export class ContentList {
  private contents: Content[] = [];
  get content(): Content[] {
    return this.contents;
  }
  //add function
  addContent(content: Content): void {
    this.contents.push(content);
  }
  //returns the number of items
  length(): number {
    return this.contents.length;
  }

  showContent(index: number) : string {
    let content = this.contents[index];
    if (content == null) {
      return `<h2 class="error" style="color:dodgerblue;">Error. There is no content at ${index}.</h2>`;
    }
    return `<h3>Title: ${content.title}</h3><p>${content.body}</p><img width="220" height="280" src="${content.imgUrl}"/><h4>Author: ${content.author}</h4>`;
  }
}

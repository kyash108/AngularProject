import { Pipe, PipeTransform } from '@angular/core';

import { Content } from './helper-files/content-interface';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(contentList: Content[], filterType?: string): Content[] {
    return filterType ? contentList.filter(content => content.type == filterType) : contentList;
  }

}

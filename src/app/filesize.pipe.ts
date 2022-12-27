import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: number): string {
    let result:any;
    if(value > (1024*1024*1024)){
      result = (value/(1024*1024*1024)).toFixed(2);
      return result +"GB";
    }else if (value > (1024*1024)){
      result = (value/(1024*1024)).toFixed(2);
      return result +"MB";
    }else if(value > 1024){
      result =(value/1024).toFixed(2);
      return result + "KB"
    }
    return result;
  }
}

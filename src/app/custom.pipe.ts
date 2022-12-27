import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(customerName: string, gende:string): string {
    if(gende=='male'){
    return "mr "+customerName;
  }else if(gende == 'female'){
    return "miss "+customerName;
    
  }
return "";
}
}

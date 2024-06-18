import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
  standalone: true
})
export class TodoPipe implements PipeTransform {

  transform(value: string[], search: string): string[] {
    if(!search) return value.map((val)=> "My " + val);

    return value.filter(p=> p.includes(search)).map((val)=> "My " + val);
  }

}

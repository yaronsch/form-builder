import {Component} from 'angular2/core';


@Component({
  selector: 'for-builder-app',
  providers: [],
  templateUrl: 'app/for-builder.html',
  directives: [],
  pipes: []
})
export class ForBuilderApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}

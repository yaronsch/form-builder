import {Component} from 'angular2/core';
import {FormService} from "./form-service";
import {ControlViewer} from "./control-viewer";

@Component({
  selector: 'form-builder-preview',
  providers: [],
  directives: [ControlViewer],
  template: `
    <h1>{{formService.title}}</h1>
    <form action="">
      <div *ngFor="#question of formService.controls">
        <control-viewer [question]="question"></control-viewer>
      </div>
    </form>
  `
})

export class FormBuilderPreview {
  constructor(private formService:FormService) {
  }
}
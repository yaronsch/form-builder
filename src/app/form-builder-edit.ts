import {Component} from 'angular2/core';
import {FormService} from "./form-service";
import {FormControl} from "./form-control";
import {ControlEditor} from "./control-editor";

@Component({
  selector: 'form-builder-edit',
  providers: [],
  directives: [ControlEditor],
  template: `
    <div><label for="form-title">Form title </label><input type="text" name="form-title" [(ngModel)]="formService.title"></div>
    <div>
      <div *ngFor="#question of formService.controls">
        <control-editor [question]="question"></control-editor>
      </div>
      <button (click)="addControl()">Add control</button>
    </div>
  `
})
export class FormBuilderEdit {
  constructor(private formService:FormService) {
  }

  addControl() {
    this.formService.add(new FormControl("", "text", []));
  }
}

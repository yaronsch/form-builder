import {Component} from "angular2/core";
import {FormControl} from "./form-control";
import {Input} from "angular2/core";
@Component({
    selector: 'control-viewer',
    template: `<div>

        <h1>{{question.title}}</h1>
        <div [ngSwitch]="question.type">
            <div *ngSwitchWhen="'text'">
                <input type="text" [(ngModel)]="question.value">
            </div>
            <div *ngSwitchWhen="'select'">
                <select name="" id="" [(ngModel)]="question.value">
                    <option *ngFor="#option of question.options" value="option.text">{{option.text}}</option>
                </select>
            </div>
            <div *ngSwitchWhen="'radio'">
                <div *ngFor="#option of question.options"><input type="radio" name="question.title" [(ngModel)]="question.value" value="option.text">{{option.text}}</div>
            </div>
        </div>

    </div>
    `
})
export class ControlViewer {
    @Input() question: FormControl;
}
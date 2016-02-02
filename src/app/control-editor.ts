import {Component, Input, Output, EventEmitter} from "angular2/core";
import {FormControl} from "./form-control";

@Component({
    selector: 'control-editor',
    template: `<div>
        <label for="question-title">Question title </label>
        <input type="text" name="question-title" [(ngModel)]="question.title">
        <select name="" id="" [(ngModel)]="question.type">
            <option value="text" selected>text</option>
            <option value="select">select</option>
            <option value="radio">radio</option>
        </select>
        <button *ngIf="isNew" (click)="addQuestion()">Add</button>
        <button *ngIf="!isNew" (click)="removeQuestion()">Remove</button>
    </div>
    <div *ngIf="question.type !== 'text'">
        <div *ngFor="#option of question.options; #i = index">
            <input type="text" [(ngModel)]="option.text">
            <button (click)="removeOption(i)">Remove</button>
        </div>
        <button (click)="addOption()">Add option</button>
    </div>
    `
})
export class ControlEditor {
    @Input() question: FormControl;
    @Output() removed = new EventEmitter();
    @Output() added = new EventEmitter();
    @Output() changed = new EventEmitter();

    addQuestion() {
        this.added.emit(this.question);
    }

    removeQuestion() {
        this.removed.emit(this.question);
    }

    addOption() {
        this.question.options.push({text: ""});
    }

    removeOption(index) {
        this.question.options.splice(index, 1);
    }
}
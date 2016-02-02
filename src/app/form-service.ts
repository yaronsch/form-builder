import {Injectable} from "angular2/core";
import {FormControl} from './form-control'

@Injectable()
export class FormService {
    title: string;
    controls: FormControl[] = [];

    add(control: FormControl) {
        this.controls = this.controls.concat(control);
    }

    remove(control: FormControl) {
        this.controls = this.controls.slice(this.controls.indexOf(control), 1);
    }

    edit (control: FormControl) {
        this.controls = this.controls.map(c => c.title === control.title ? control : c);
    }
}
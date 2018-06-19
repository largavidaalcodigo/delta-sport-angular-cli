export class MultiSelect {

    constructor(_value: any, _display: any, _selected?: boolean) {
        this.value = _value;
        this.display = _display;
        this.selected = _selected || false;
    }

    value: string | number;
    display: string | number;
    selected: boolean;

}
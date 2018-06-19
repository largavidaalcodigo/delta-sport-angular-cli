import { Component, ViewChild, Output, Input, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { MultiSelect } from './multiselect.model';

@Component({
    selector: 'multiselect',
    templateUrl: 'multiselect.template.html'
})
export class MultiSelectComponent {

    // Parent comp. passes in observable of
    // selectable data
    @Input() options: Observable<MultiSelect[]>;
    @Input() placeholder: string;

    // When the data is chosen, we pass back the
    // newly selected values
    @Output() onOptionsUpdate = new EventEmitter<MultiSelect[]>();


    @ViewChild('input') input;
    public search: FormControl = new FormControl();
    private model: MultiSelect[] = new Array<MultiSelect>();
    public previewItems: MultiSelect[] = new Array<MultiSelect>();
    public selected: MultiSelect[] = new Array<MultiSelect>();
    public hidePreviewItems: boolean = true;
    public hasPreviewItems: boolean = false;

    constructor() {

        this.search.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((value: string) => {
                if (value == '')
                    this.previewItems = [];
                else
                    this.previewItems = this.getMatching(value);
            });

    }

    ngOnInit() {
        //this.options.subscribe((selections: MultiSelect[]) => this.model = selections);
    }

    onItemDeselect(selected) : void {

        // Remove from selected list
        for (let i = 0; i < this.selected.length; i++) {
            if (this.selected[i].value == selected.value) {
                this.selected.splice(i, 1);
                break;
            }
        }

        // Mark not selected in model
        for (let i = 0; i < this.model.length; i++) {
            if (this.model[i].value == selected.value) {
                this.model[i].selected = false;
                break;
            }
        }

        this.onOptionsUpdate.emit(this.selected);

    }

    onItemSelect(selected) : void {
        this.selected.push(selected);
        this.previewItems = [];
        this.input.nativeElement.value = '';

        for (let i = 0; i < this.model.length; i++) {
            if (this.model[i].value == selected.value) {
                this.model[i].selected = true;
                break;
            }
        }

        this.hidePreviewItems = true;
        this.onOptionsUpdate.emit(this.selected);

    }

    onInputFocus() : void {
        this.hidePreviewItems = false;
    }

    onInputBlur() : void {
        let me = this;
        setTimeout(() => {
            if (!me.hidePreviewItems) me.hidePreviewItems = true;
        }, 120);
    }

    getMatching(keyword: string) : MultiSelect[] {
        let results : MultiSelect[] = [];
        keyword = this.trim(keyword).toLowerCase();
        for(let i = 0; i < this.model.length; i++) {
            if (!this.model[i].selected && this.model[i].display.toString().toLowerCase().indexOf(keyword) != -1) {
                if(!this.exists(results, this.model[i])) {
                    results.push(this.model[i]);
                }
            }
        }

        return results;
    }

    exists(objList : MultiSelect[], obj : MultiSelect) : boolean {
        for(let i = 0; i < objList.length; i++) {
            if (objList[i].value === obj.value) return true;
        }
        return false;
    }

    trim(s: string) : string {
        let l = 0, r = s.length-1;
        while(l < s.length && s[l] == ' ') l++;
        while(r > l && s[r] == ' ') r--;

        return s.substring(l, r + 1);
    }

    // private

}

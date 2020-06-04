import {Component, OnInit} from '@angular/core';
import {Mode} from '../../services/Search.enum';
import {SearchService} from '../../services/Search.service';
@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {

    mode: Mode;
    constructor(private searchService: SearchService) {
        this.mode = this.searchService.getMode;
        this.searchService.mode$.subscribe({
            next: nm => {
                this.mode = nm;
            }
        });
    }

    ngOnInit(): void {
    }

    changeMode(nm){
        this.searchService.updateMode = nm;
    }
    get ModeEnum() { return Mode; }
}

import {Component, HostBinding, OnInit} from '@angular/core';
import {SearchService} from '../services/Search.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
    @HostBinding('class.main') mainClass = true;
    activated: boolean;

    constructor(
        private searchService: SearchService
    ) {
        this.searchService.activated$.subscribe({
            next: v => this.activated = v
        });
    }

    ngOnInit(): void {
    }
}

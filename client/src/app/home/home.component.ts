import { Component, OnInit} from '@angular/core';
import { SearchService } from '../services/Search.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
    title = "Gamin' Stats";
    activated: boolean;
    constructor(private searchService: SearchService) {
        this.searchService.activated$.subscribe({
            next: v => this.activated = v
        });
    }

    ngOnInit(): void {
    }
}

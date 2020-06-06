import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/Search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

    private activated: boolean;
    search: string;

    constructor(private searchService: SearchService) {
        this.activated = searchService.isActivated;
        this.search = this.searchService.searchContent;

        this.searchService.search$.subscribe({
            next: v => this.search = v
        });

        this.searchService.activated$.subscribe({
            next: v => this.activated = v
        });
    }

    public keyPressedHandler(){
        this.searchService.updateState = this.search.length > 0;
        this.searchService.updateSearch = this.search;
    }

    ngOnInit(): void {
    }

}

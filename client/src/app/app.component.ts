import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/Search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
    activated: boolean;
    
    constructor(
        private searchService: SearchService
        )
    {
        this.searchService.activated$.subscribe({
            next: v => this.activated = v
        });
    }

    ngOnInit(): void {

    }
}

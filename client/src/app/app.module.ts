import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { SearchComponent } from './main/home/search/search.component';
import { ResultsComponent } from './main/results/results.component';
import { OptionsComponent } from './main/results/options/options.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

import { SearchService } from './services/Search.service';
import { GameService } from './services/Game.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ResultsComponent,
        OptionsComponent,
        LoginComponent,
        RegisterComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        SearchService,
        GameService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { ResultsComponent } from './results/results.component';

import { SearchService } from './services/Search.service';
import { GameService } from './services/Game.service';
import { HttpClientModule } from '@angular/common/http';
import { OptionsComponent } from './results/options/options.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

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

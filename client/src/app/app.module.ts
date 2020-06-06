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
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ResultsComponent,
        OptionsComponent,
        ClientComponent,
        LoginComponent,
        RegisterComponent
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

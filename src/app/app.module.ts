import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardCompanyComponent } from './main/card-company/card-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { SearchbarComponent } from './main/searchbar/searchbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainPageComponent } from './main/pages/main-page.component';
import { MainModule } from './main/main.module';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MainModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

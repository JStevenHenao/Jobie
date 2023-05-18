
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CardCompanyComponent } from './card-company/card-company.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MainPageComponent } from './pages/main-page.component';
import { ServicesIconComponent } from './services-icon/services-icon.component';
import { IvyCarouselModule } from 'carousel-angular';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchbarComponent,
  CardCompanyComponent,
  MainPageComponent,
  ServicesIconComponent,
],
  exports:[
    MainPageComponent,

  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    IvyCarouselModule,
    MatTooltipModule,
    FormsModule

  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BtnsearchComponent } from './components/btnsearch/btnsearch.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CardsComponent,
    FooterComponent,
    CarouselComponent,
    BtnsearchComponent,
    DetailItemComponent,
    DetailHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

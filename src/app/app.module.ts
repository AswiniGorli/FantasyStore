import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { HomeComponent } from './home/home.component';

import { VkComponent } from './vk/vk.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CrComponent } from './cr/cr.component';
import { SpideyComponent } from './spidey/spidey.component';
import { FrozenComponent } from './frozen/frozen.component';
import { DevotionComponent } from './devotion/devotion.component';
import { ShinchanComponent } from './shinchan/shinchan.component';
import { VkdetailsComponent } from './vkdetails/vkdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomepageComponent,
    HomeComponent,
    
    VkComponent,
         CrComponent,
         SpideyComponent,
         FrozenComponent,
         DevotionComponent,
         ShinchanComponent,
         VkdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

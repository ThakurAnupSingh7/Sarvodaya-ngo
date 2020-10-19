import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OutreachComponent } from './outreach/outreach.component';
import { FundingComponent } from './funding/funding.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurWorkComponent,
    GalleryComponent,
    OutreachComponent,
    FundingComponent,
    GetInvolvedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatMenuModule,MatToolbarModule,MatIconModule,MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

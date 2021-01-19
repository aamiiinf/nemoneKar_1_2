
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// MDB Angular Free
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainTopComponent } from './components/main-top/main-top.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAsliComponent } from './routes/page-asli/page-asli.component';
import { SingInComponent } from './routes/rigester/sing-in/sing-in.component';
import { SingUpComponent } from './routes/rigester/sing-up/sing-up.component';
import { MainFeaturesComponent } from './components/main-features/main-features.component';
import { MainOneComponent } from './components/main-one/main-one.component';
import { MainTwoComponent } from './components/main-two/main-two.component';
import { StickyHeaderModule, NavbarModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [
    AppComponent,
    MegaMenuComponent,
    SliderComponent,
    MainTopComponent,
    MainComponent,
    FooterComponent,
    NotfoundComponent,
    AdminPanelComponent,
    PageAsliComponent,
    SingInComponent,
    SingUpComponent,
    MainFeaturesComponent,
    MainOneComponent,
    MainTwoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    StickyHeaderModule,
    NavbarModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
 }

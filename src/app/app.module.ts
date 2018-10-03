import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllregionsComponent } from './allregions/allregions.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { SinglecountryComponent } from './singlecountry/singlecountry.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WorldService } from './world.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AllregionsComponent,
    AllcountriesComponent,
    SinglecountryComponent,
    CurrencyComponent,
    LanguageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'regions', component: AllregionsComponent },
      { path: 'regions/:region', component: AllcountriesComponent },
      { path: 'countryname/:countryname', component: SinglecountryComponent },
      { path: 'currencies/:currencies', component: CurrencyComponent },
      { path: 'language/:language', component: LanguageComponent },
      { path: '', redirectTo: 'regions', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent }
    ])

  ],
  providers: [WorldService],
  bootstrap: [AppComponent]
})
export class AppModule { }

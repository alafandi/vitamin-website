import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ConfigModule, ConfigLoader,  } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "assets/i18n/", ".json");
}

export function configFactory(http: HttpClient): ConfigLoader {
  return new ConfigHttpLoader(http, 'assets/config.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory),
      deps: [HttpClient]
    }),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

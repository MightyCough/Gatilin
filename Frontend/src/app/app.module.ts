import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetGeoCoordsComponent } from './tools/get-geo-coords/get-geo-coords.component';
import { UpdateGeoCoordsComponent } from './tools/update-geo-coods/update-geo-coods.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DevelopersComponent } from './views/merakt/developers/developers.component';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GetGeoCoordsComponent,
    UpdateGeoCoordsComponent,
    SocialLoginModule,
    GoogleSigninButtonModule,
    FontAwesomeModule,
    DevelopersComponent,
  ],
  exports: [
    GetGeoCoordsComponent,
    UpdateGeoCoordsComponent,
    GoogleSigninButtonModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue :{
        autoLogin: false,
        providers:[
          //{
            //id: GoogleLoginProvider.PROVIDER_ID,
            //provider: new GoogleLoginProvider(
              //'943635057605-9ot83gadifadsrhrnoq94quaq69f7qis.apps.googleusercontent.com'
            //)
          //}
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

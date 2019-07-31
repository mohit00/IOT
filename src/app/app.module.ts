/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Token} from '../app/headerInterceptor/token'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
 
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  
  NbWindowModule ,   NbCardModule,NbButtonModule, NbInputModule,NbSelectModule,NbIconModule 
} from '@nebular/theme';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { UserService } from './pages/user/user.service';

@NgModule({
  declarations: [AppComponent, DialogUserComponent],
  entryComponents:[DialogUserComponent],
  imports: [NbIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,FormsModule,
    NbCardModule ,NbButtonModule,NbInputModule,
    ThemeModule.forRoot(),
     NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
     NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],providers:[UserService, { provide: HTTP_INTERCEPTORS, useClass: Token, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

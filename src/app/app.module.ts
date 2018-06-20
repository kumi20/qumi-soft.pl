import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MDBBootstrapModulePro } from './typescripts/pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { EventService } from './event.service';
import { routerModule} from './app.routing';
import { AuthGuard } from './auth.guard';
import { GoogleAnalyticsModule, GA_TOKEN } from 'angular-ga';

import { DashboardComponent} from './dashboard/dashboard.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { WraperComponentComponent } from './wraper-component/wraper-component.component';
import { TemplateModule } from './template/template.module';
import { EbookComponent } from './ebook/ebook.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DynamicComponentComponent,
    WraperComponentComponent,
    EbookComponent,    
  ],
  imports: [
    BrowserModule, 
	GoogleAnalyticsModule.forRoot(),
    FormsModule,
    HttpModule,
    routerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TemplateModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot()
  ],
  providers: [ApiService, EventService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

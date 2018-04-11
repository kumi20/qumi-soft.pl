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

import { DashboardComponent} from './dashboard/dashboard.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { WraperComponentComponent } from './wraper-component/wraper-component.component';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DynamicComponentComponent,
    WraperComponentComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TemplateModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot()
  ],
  providers: [ApiService, EventService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MDBBootstrapModulePro } from '../typescripts/pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerModule} from '../app.routing';
import { HttpModule } from '@angular/http';
import { Router, CanActivate } from '@angular/router';

import { ApiService } from '../api.service';
import { EventService } from '../event.service';
import { AgmCoreModule } from '@agm/core';
import { FullCalendarModule } from 'ng-fullcalendar';

import { Ng2PaginationModule } from 'ng2-pagination';
import { MyDatePickerModule } from 'mydatepicker';
import { FileUploadModule } from 'ng2-file-upload';
import { StaticComponent } from './static/static.component';
import { NewsComponentView } from './news/news.component';
import { MenuParent } from './menu/menu/menu.component';
import { ChildMenuComponent } from './menu/child-menu/child-menu.component';
import { MapyComponent } from './mapy/mapy.component';
import { CformTemplateComponent } from './cform/cform.component';
import { PoolComponent } from './pool/pool.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CalendarTemplateComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FileUploadModule,
    Ng2PaginationModule,
    routerModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    MDBBootstrapModule.forRoot(), 
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCWGwAYym9aNgPYwihVhdaB-pxnoE03-D4'
    })  
  ],
  declarations: [StaticComponent,NewsComponentView,ChildMenuComponent,MapyComponent,CformTemplateComponent,PoolComponent,GalleryComponent,NewsletterComponent,CalendarTemplateComponent,MenuParent],
  providers: [ApiService, EventService,MenuParent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class TemplateModule { }

import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren} from '@angular/core';
import { EventService } from './event.service';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'angular-ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    googleAnalitycs;
    
   // template/configurator/getList.php
    constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router, private gaService: GoogleAnalyticsService){}
    
    ngOnInit(){
		
        this.event.klepsydraStart();
        this.CmsService.get(`template/configurator/getList.php`).subscribe(
            response=>{
                if(response!=null){
                    response.forEach(el=>{
                        if (el.param_name == "page_title_prefix") document.title = el.param_value;                        
                        if (el.param_name == "description") document.querySelector('meta[name="description"]').setAttribute("content", el.param_value);
                        if (el.param_name == "keywords") document.querySelector('meta[name="keywords"]').setAttribute("content", el.param_value);
                        if (el.param_name == "analytics") this.googleAnalitycs =  el.param_value                       
                    });
					this.gaService.configure(this.googleAnalitycs);
                }
            },
            error =>{
                this.event.klepsydraStop();
                this.event.wyswietlInfo('error',"Błąd połączenia z bazą danych");
            }
        )
    }
}

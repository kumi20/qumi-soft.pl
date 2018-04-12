import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren} from '@angular/core';
import { EventService } from './event.service';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    googleAnalitycs;
    
   // template/configurator/getList.php
    constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router){}
    
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
                    
                     var _gaq = _gaq || [];
                      _gaq.push(['_setAccount', this.googleAnalitycs]);
                      _gaq.push(['_trackPageview']);

                      (function() {
                        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                      })();
                }
            },
            error =>{
                this.event.klepsydraStop();
                this.event.wyswietlInfo('error',"Błąd połączenia z bazą danych");
            }
        )
    }
}

import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';

import { StaticComponent } from '../template/static/static.component';
import { NewsComponentView } from '../template/news/news.component';
import { MenuParent } from '../template/menu/menu/menu.component';
import { MapyComponent } from '../template/mapy/mapy.component';
import { CformTemplateComponent } from '../template/cform/cform.component';
import { PoolComponent } from '../template/pool/pool.component';
import { GalleryComponent } from '../template/gallery/gallery.component';
import { NewsletterComponent } from '../template/newsletter/newsletter.component';
import { CalendarTemplateComponent } from '../template/calendar/calendar.component';

@Component({
  selector: 'app-wraper-component',
  templateUrl: './wraper-component.component.html',
  styleUrls: ['./wraper-component.component.scss'],
  inputs:['idKontenera','idPage']
})
export class WraperComponentComponent implements OnInit {

  kontrolki = [];
  kontrolkiDoWyswietlenia = [];
  idKontenera;
  idPage;

  constructor(private ref: ElementRef, private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {  
      this.route.params.subscribe(params => this.idPage = parseInt(params['id']));
      if (isNaN(this.idPage)) this.idPage = 1;
      
      if(this.idPage != 1){
          this.pobierzKontrolki(this.idPage);
      }
      else{
          this.pobierzKontrolki();
      }
  }

  pobierzKontrolki(idPage?){
        this.event.klepsydraStart();
        if(idPage) this.idPage = idPage; 
        
        const json = JSON.stringify({
            'idContainer': this.idKontenera,
            'idPage': this.idPage
        })
        this.CmsService.post('page/getContainerElement.php', json).subscribe(
            response => {
                this.kontrolki = response;
                this.wyswietlKontrolki();
                
                this.event.klepsydraStop();
            },
            error => this.event.klepsydraStop()
        )
  
  }
  
  wyswietlKontrolki(){
      this.kontrolkiDoWyswietlenia.length = 0;
      this.kontrolki.forEach((value, index)=> {
          let k = null;
          
          switch(value.module_view_id){
                
              case '12': k = StaticComponent; break;
              case '1': k = NewsComponentView; break;
              case '6': k = MenuParent; break; 
              case '33': k = MapyComponent; break;  
              case '11': k = CformTemplateComponent; break; 
              case '18': k = PoolComponent; break;  
              case '10': k = GalleryComponent; break;  
              case '26': k = NewsletterComponent; break; 
              case '24': k = CalendarTemplateComponent; break;      
          }
  
          this.kontrolkiDoWyswietlenia[index] = {
              component: k,
              idTresci: value.page_element_elemid,
              pageElement: value.page_element_id
          };
      }
      
    )

    
}

}

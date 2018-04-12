import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren} from '@angular/core';
import { EventService } from '../event.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  @ViewChildren('dynamiCom') dynamiCom;  
  id: number = 1;
    
  constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router) { }
    
  ngOnInit() {
  }
 
    routing(id){
        this._route.navigate(['/',id]);
        this.dynamiCom.forEach(el=>{
                el.pobierzKontrolki(id);
        })
        
    }
}

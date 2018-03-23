import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { EventService } from '../event.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private toastrService: EventService) { }


  ngOnInit() {
     
  }

    test(){
        this.toastrService.wyswietlInfo('success', 'test error');
    }
}

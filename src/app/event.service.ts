import { Injectable } from '@angular/core';
import { ToastService } from './typescripts/pro'



@Injectable()
export class EventService {

  constructor(private toastrService: ToastService) {}


  wyswietlInfo(typ, tresc){
    switch(typ){
        case 'info': this.toastrService.info(tresc); break;
        case 'success': this.toastrService.success(tresc); break;
        case 'error': this.toastrService.error(tresc); break;
    }
  }
}
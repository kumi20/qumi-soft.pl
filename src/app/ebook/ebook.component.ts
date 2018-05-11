import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren} from '@angular/core';
import { EventService } from '../event.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.scss']
})
export class EbookComponent implements OnInit {

  userName: string = '';
  userData = {
      customer_city: '',
      customer_id: '',
      customer_name: '',
      customer_nip: '',
      customer_post_code: '',
      customer_street: ''
  };
  faktury;   
  month;
  year;    
  actualYear;    
  actualDate; 
  eidtData: boolean = false;  
  isChangePsw: boolean = false; 
  psw: string = '';
  psw2: string = '';    
    
  constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
      
      this.month = this.CmsService.month;
      this.year = this.CmsService.year;
      this.actualYear = new Date().getFullYear().toString();
      this.actualDate = new Date().getFullYear() + '-' + this.event.formatMonth(new Date().getMonth()) + '-' + this.event.formatDay(new Date().getDate());
      
      this.event.klepsydraStart();
      this.CmsService.getEbook(`userPanel/getUser.php`).subscribe(
        response =>{
            this.event.klepsydraStop();
            this.userData = response[0];
            this.downloadFV();
        },
        error =>{
            this.event.klepsydraStop();
            location.reload();
        }  
      )
      this.userName = localStorage.getItem('userQumiName');
  }

    logOut(){
        localStorage.removeItem('userQumiToken');
        localStorage.removeItem('userQumiName');
        this._route.navigateByUrl('');
    }
    
    
    downloadFV(){
        this.CmsService.getEbook(`userPanel/getCustomerFV.php?year=${this.actualYear}`).subscribe(
                response=>{
                    this.faktury = response;
                    
                },
                error =>{
                    this.event.wyswietlInfo('error', 'Błąd pobierania faktur');
                }
        )
    }
    
    edit(){
        this.eidtData = true;
        this.isChangePsw = false;
    }
    
    
    save(){
        let dataProfile = JSON.stringify({
            'customer_name': this.userData.customer_name,
            'customer_post_code': this.userData.customer_post_code,
            'customer_city': this.userData.customer_city,
            'customer_street': this.userData.customer_street,
            'customer_nip': this.userData.customer_nip
        });
        
        this.event.klepsydraStart();
        this.CmsService.postEbook(`userPanel/post.php`, dataProfile).subscribe(
            response =>{
                this.event.klepsydraStop();
                this.event.wyswietlInfo('info', 'Zaktualizowano dane');
                this.ngOnInit();
                this.eidtData = false;
            },
            error=>{
                this.event.klepsydraStop();
                this.event.wyswietlInfo('error','Błąd zapisu');
            }
        )
    }
    
    changePsw(){
        this.isChangePsw = true;
        this.eidtData = false;
    }
    
    cancel(){
        this.isChangePsw = false;
        this.eidtData = false;
    }
    
    savePsw(){
        if (this.psw === this.psw2){
            let datePsw = JSON.stringify({
                'psw': this.psw
            })
            
            this.event.klepsydraStart();
            this.CmsService.postEbook(`userPanel/postPsw.php`, datePsw).subscribe(
                response =>{
                    this.event.klepsydraStop();
                    this.event.wyswietlInfo('info', "hasło zostało zmienione");
                    this.isChangePsw = false;
                },
                error =>{
                    this.event.klepsydraStop();
                    this.event.wyswietlInfo('error', 'Błąd zapisu');
                }
            )
            
        }
        else this.event.wyswietlInfo('info', 'Podane hasła nie są identyczne')
    }
}

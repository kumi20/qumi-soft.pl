import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren} from '@angular/core';
import { EventService } from '../event.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  @ViewChildren('dynamiCom') dynamiCom;  
  id: number = 1;
  userEmail: string = '';
  userPsw: string = '';   
  errorLogin: string = '';
    
  jwtHelper: JwtHelper = new JwtHelper();
    
  constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router) { }
    
  ngOnInit() {
  }
 
    routing(id){
        this._route.navigate(['/',id]);
        this.dynamiCom.forEach(el=>{
                el.pobierzKontrolki(id);
        })
        
    }
    
    logOn(){
        if (this.userEmail === '' || this.userPsw === '') this.event.wyswietlInfo('info', 'Wprowadź maile i hasło');
        else{
            let dataLogin = JSON.stringify({
                user: this.userEmail,
                psw: this.userPsw
            });
            
            this.event.klepsydraStart();
            this.CmsService.post(`userPanel/loguj.php`, dataLogin).subscribe(
                response =>{
                    this.event.klepsydraStop();
                    let tokenExpDate = this.jwtHelper.decodeToken(response);
                    if (tokenExpDate.kod != 0 ) this.errorLogin = tokenExpDate.opis;
                    else {
                          localStorage.setItem('userQumiToken', response);
                          localStorage.setItem('userQumiName', tokenExpDate.name);
                          this._route.navigateByUrl('ebook');
                        
                    }
                },
                error =>{
                    this.event.klepsydraStop();
                    this.event.wyswietlInfo('error', "Błąd logowania");
                }
            )
        }
        
    }
}

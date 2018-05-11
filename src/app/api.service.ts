import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  uri = 'http://kumi20.webd.pl/api/cms/';
  //uri = 'http://kumi20.webd.pl/apitest/cms/'; //api testowe
    
  uriUploudImageGallery = 'http://kumi20.webd.pl/api/cms/gallery/uploudImages.php';

  uriGallery = 'http://kumi20.webd.pl/cms/assets/gallery';

  uriNewsImage = 'http://kumi20.webd.pl/api/plik.php';
  sourceImageNews = 'http://kumi20.webd.pl/source/';
 
  headers:Headers = new Headers;    

  constructor(private _http:Http) { 
      this.headers.append('AuthorizationToken',localStorage.getItem('userQumiToken'));
  }

  get(uri){
    return this._http.get(this.uri+uri).map(
        response => response.json()
    )
  }

  post(uri, json){
      return this._http.post(this.uri+uri,json).map(
          response => response.json()
      )
  }

    
  //uniwersalne funkcja pobierajaca
    getEbook(uri){
        return this._http.get(this.uri+uri,{headers: this.headers}).map(
            response => response.json()
        )
    }

    //uniwersalna funkcja zapisujaca
    postEbook(uri, json){
        return this._http.post(this.uri+uri,json,{headers: this.headers}).map(
            response => response.json()
        )
    }  
    
    month: Array<any> = [
      {value:'01', label: 'styczeń'},
      {value:'02', label: 'luty'},
      {value:'03', label: 'marzec'},
      {value:'04', label: 'kwiecień'},
      {value:'05', label: 'maj'},
      {value:'06', label: 'czerwiec'},
      {value:'07', label: 'lipiec'},
      {value:'08', label: 'sierpień'},
      {value:'09', label: 'wrzesień'},
      {value:'10', label: 'październik'},
      {value:'11', label: 'listopad'},
      {value:'12', label: 'grudzień'}
    ];
    
    year: Array<any> = [
      {value:'2014', label: '2014'},
      {value:'2015', label: '2015'},
      {value:'2016', label: '2016'},
      {value:'2017', label: '2017'},
      {value:'2018', label: '2018'},
      {value:'2019', label: '2019'}
    ];
}



import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  uri = 'http://kumi20.webd.pl/api/cms/';
  //uri = 'http://127.0.0.1/CMS/src/api/'; //api testowe
    
  uriUploudImageGallery = 'http://kumi20.webd.pl/api/cms/gallery/uploudImages.php';

  uriGallery = 'http://kumi20.webd.pl/cms/assets/gallery';

  uriNewsImage = 'http://kumi20.webd.pl/api/plik.php';
  sourceImageNews = 'http://kumi20.webd.pl/source/';
 
  headers:Headers = new Headers;    

  constructor(private _http:Http) { 
      this.headers.append("Content-Type", "application/json");
      this.headers.append("Accept","Authorization");
      this.headers.append("Content-Type", "application/json");
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

}



import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestmessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestmessProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello TestmessProvider Provider');
  }
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json; charset=utf-8');
    myHeaders.append('Content-type','application/json; charset=utf-8');
    opt = new RequestOptions({
      headers : myHeaders

    })
    return new Promise(resolve =>{
      this.http.get('http://localhost/monash/jp.php',opt)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

}

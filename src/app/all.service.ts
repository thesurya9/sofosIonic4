import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



let config = {
  serveConnectionString: '3dsol.obto.co/api/auth'
}



@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) {

  }


  auth(postbody) {
    var headers = new Headers();    
    headers.append('Content-type', 'application/json');
    return this.http.post(config.serveConnectionString, postbody)
      .pipe(map((res : Response) => res.json()));
  }
}

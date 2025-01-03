import { Injectable } from '@angular/core';

import {HttpClient} from  '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsserviceService {
private baseurl1="assets/virat.json";
private baseurl2="assets/spidey.json";
private baseurl3="assets/cr7.json";
private baseurl4="assets/frozen.json";
private baseurl5="assets/devotion.json";
private baseurl6="assets/shinchan.json";
  constructor(private http:HttpClient) {}
  
getvkdetails():Observable<any[]>

{
  return this.http.get<any[]>(`${this.baseurl1}`);
}


getspideydetails():Observable<any[]>

{
  return this.http.get<any[]>(`${this.baseurl2}`);
}


getcrdetails():Observable<any[]>

{
  return this.http.get<any[]>(`${this.baseurl3}`);
}


getfrozendetails():Observable<any[]>

{
  return this.http.get<any[]>(`${this.baseurl4}`);
}

getdevotiondetails():Observable<any[]>

{
  return this.http.get<any[]>(`${this.baseurl5}`);
}
getshinchandetails():Observable<any[]>

{
  return this.http.get<any[]>(`${this.baseurl6}`);
}

}

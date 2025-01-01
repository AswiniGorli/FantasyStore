import { Injectable } from '@angular/core';
import { Cards } from '../models/cards';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsserviceService {
private baseurl="";
  constructor(private http:HttpClient) {}
  
getvkdetails():Observable<any[]>

{
return this.http.get<any[]>(`${this.baseurl}`);
}

}

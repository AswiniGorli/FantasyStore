import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { CardsserviceService } from '../services/cardsservice.service';


@Component({
  selector: 'app-cr',
  templateUrl: './cr.component.html',
  styleUrls: ['./cr.component.css']
})
export class CrComponent {
details:Cards[]=[]
constructor(private service:CardsserviceService){}

ngOnInit():void{

this.service.getcrdetails().subscribe(data=>this.details=data)

}

}

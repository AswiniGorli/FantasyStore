import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { CardsserviceService } from '../services/cardsservice.service';

@Component({
  selector: 'app-spidey',
  templateUrl: './spidey.component.html',
  styleUrls: ['./spidey.component.css']
})
export class SpideyComponent {
details:Cards[]=[]
constructor(private service:CardsserviceService){}

ngOnInit():void{

this.service.getspideydetails().subscribe(data=>this.details=data)

}
}

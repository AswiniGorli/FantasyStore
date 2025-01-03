import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { CardsserviceService } from '../services/cardsservice.service';
@Component({
  selector: 'app-shinchan',
  templateUrl: './shinchan.component.html',
  styleUrls: ['./shinchan.component.css']
})
export class ShinchanComponent {
  details:Cards[]=[]
  constructor(private service:CardsserviceService){}
  
  ngOnInit():void{
  
  this.service.getshinchandetails().subscribe(data=>this.details=data)
  
  }
}

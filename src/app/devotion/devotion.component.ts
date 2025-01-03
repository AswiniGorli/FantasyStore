import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { CardsserviceService } from '../services/cardsservice.service';
@Component({
  selector: 'app-devotion',
  templateUrl: './devotion.component.html',
  styleUrls: ['./devotion.component.css']
})
export class DevotionComponent {
  details:Cards[]=[]
  constructor(private service:CardsserviceService){}
  
  ngOnInit():void{
  
  this.service.getdevotiondetails().subscribe(data=>this.details=data)
  
  }
}

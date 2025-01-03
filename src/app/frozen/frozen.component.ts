import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { CardsserviceService } from '../services/cardsservice.service';
@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styleUrls: ['./frozen.component.css']
})
export class FrozenComponent {
  details:Cards[]=[]
  constructor(private service:CardsserviceService){}
  
  ngOnInit():void{
  
  this.service.getfrozendetails().subscribe(data=>this.details=data)
  
  }
}

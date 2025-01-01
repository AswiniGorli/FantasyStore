import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { CardsserviceService } from '../services/cardsservice.service';

@Component({
  selector: 'app-virat',
  templateUrl: './virat.component.html',
  styleUrls: ['./virat.component.css']
})
export class ViratComponent {

  records:Cards[]=[];
constructor(private service:CardsserviceService){}

ngOnInit():void
{
  
 this.service.getvkdetails().subscribe(data=>this.records=data);
  
}

}

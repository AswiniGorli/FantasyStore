import { Component } from '@angular/core';
import { Cards } from '../models/cards'; 
import { CardsserviceService } from '../services/cardsservice.service';
@Component({
  selector: 'app-vk',
  templateUrl: './vk.component.html',
  styleUrls: ['./vk.component.css']
})
export class VkComponent {

 details:Cards[]=[];

 constructor(private service:CardsserviceService){}

ngOnInit():void{

  this.service.getvkdetails().subscribe(data=>this.details=data);

}

}

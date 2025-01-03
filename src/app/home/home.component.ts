import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
constructor(private route:Router){}
  onclick2()
  {
    this.route.navigate(['/spidey']);
  }

  onclick3()
  {
    this.route.navigate(['/cr']);
  }

  onclick4()
  {
    this.route.navigate(['/frozen']);
  }

  onclick5()
  {
    this.route.navigate(['/devotion']);
  }
  onclick6()
  {
    this.route.navigate(['/shinchan']);
  }
  
  
}

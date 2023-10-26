import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Locations } from './types/locations.interface';
import { ListUnitsService } from 'src/app/services/list-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showList = new BehaviorSubject(false);
  unitsList: Locations[] = [];

  constructor(private unitService: ListUnitsService ){}

  onSubmit(){    
    this.unitsList = this.unitService.getFilteredUnits(); 
    this.showList.next(true);
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListUnitsService } from 'src/app/services/list-units.service';
import { DataLocation } from '../../types/data-locations.interface'
import { Locations } from '../../types/locations.interface'
import { FilterUnitServiceService } from 'src/app/services/filter-unit-service.service';


@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();
  
  results!: Locations[];
  locations: Locations[] = []
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private listUnitsService: ListUnitsService, private filterUnitService: FilterUnitServiceService){}

  ngOnInit(): void {

    this.locations = [];
    
    this.listUnitsService.getUnitsList().subscribe(data => {
      this.results = data;
    })
    

    this.formGroup = this.formBuilder.group({      
      hour: '',
      showClosed: false
    });

    
  }

  
  onSubmit(){

    this.locations = [];

    let { hour, showClosed } = this.formGroup.value;
    this.locations = this.filterUnitService.filter(this.results, (showClosed ? showClosed : false), hour);
    this.listUnitsService.setFilteredUnits(this.locations);

    this.submitEvent.emit();
    
  }

  onClean(){
    this.locations = [];
    this.listUnitsService.setFilteredUnits(this.locations);
    this.submitEvent.emit();
    this.formGroup.reset(); 
  }

}

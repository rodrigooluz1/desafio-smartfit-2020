import { Component, OnInit, Input } from '@angular/core';
import { Locations } from 'src/app/types/locations.interface';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() unitsList: Locations[] = [];
  
  constructor(){ }

  ngOnInit(): void {    
  }
  
}

